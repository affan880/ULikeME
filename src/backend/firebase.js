import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

export const Auth = () => {
  return auth();
};
export const getCurrentUser = () => {
  return auth().currentUser;
};

export const firestoreDB = () => {
  return firestore();
};

export const signOut = () => {
  return auth().signOut();
}

const currentUser = getCurrentUser();

export const getUserProfile = async (id) => {
  try{
    const userRef = firestore().collection('users').doc(id);
    const snapshot = await userRef.get();
    const data = snapshot.data();
    return {
      id: id,
      name: data?.name,
      photo: getObjectWithNonNullUrl(data?.photos),
      descr: 'I am john. I like to sing, cook, and play pool. I’m a surgeon and I don’t like olives.',
      isHeart: true, 
      isOnline: true,
    };
  }
  catch(error){
    console.log(error);
    return null
  }
}

export const getUserCompleteProfile = async (id) => {
  try{
    const userRef = firestore().collection('users').doc(id);
    const snapshot = await userRef.get();
    const data = snapshot.data();
    return data;
  }
  catch(error){
    console.log(error);
    return null
  }
}


export async function uploadFilesToStorage(fileArray) {
  const userId = getCurrentUser().uid;
  const updatedFileArray = await Promise.all(
    fileArray.map(async (file) => {
      if (file.uri) {
        const storageRef = storage().ref(`userPfp/${userId}/${file.id}`);
        try {
          const response = await fetch(file.uri);
          const blob = await response.blob();
          await storageRef.put(blob);
          const downloadURL = await storageRef.getDownloadURL();
          return { id: file.id, uri: downloadURL };
        } catch (error) {
          console.log(`Error uploading file with ID ${file.id}:`, error);
          return file; // Return original file object if upload fails
        }
      } else {
        return file; // Return original file object if URI is null
      }
    })
  );

  return updatedFileArray;
}


export const getUserAdditionalInfo = async () => {
const currentUser = getCurrentUser();
  try {
    const docRef = firestoreDB().doc(`users/${currentUser?.uid}`);
    const snapshot = await docRef.get();
    return snapshot.data();
  } catch (error) {
    console.log('Error fetching user additional info:', error);
    throw error;
  }
};

export const createUserDocument = (data) => {
const currentUser = getCurrentUser();
const url = getObjectWithNonNullUrl(data?.photos);
  firestoreDB().doc(`users/${currentUser.uid}`).set(data).then(()=>{
    currentUser.updateProfile({
      displayName: data?.name,
      photoURL: url
    })
    return true
  }).catch(()=>{
    return false
  })
}


export async function signInWithPhoneNumber(phoneNumber) {
  const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  return confirmation
}

export async function confirmCode(confirmation, code) {
  try {
    await confirmation.confirm(code);
    console.log('Verification code confirmed.');
    // Handle successful verification here
    return true
  } catch (error) {
    console.log('Invalid code.');
    // Handle invalid verification code here
    return false
  }
}

export async function setUserEmail(email) {
    try {
      const user = auth().currentUser;
      await user.updateEmail(email);
      await user.sendEmailVerification();
      console.log('Email updated successfully. Verification email sent.');
      return true
      // Handle successful email update and verification here
    } catch (error) {
      console.log('Failed to update email:', error.message);
      // Handle error updating email here
      return false
    }
}

const getObjectWithNonNullUrl = (objectsArray) => {
  const objectWithNonNullUrl = objectsArray.find((obj) => obj.uri !== null && obj.uri !== undefined && obj.uri !== '');
  return objectWithNonNullUrl ? objectWithNonNullUrl.uri : null;
};



export const showPotentialMatches = async () => {
  try {
    const userId = auth().currentUser.uid;
    const userRef = firestore().collection('users').doc(userId);
    const userDoc = await userRef.get();
    const currentUser = userDoc.data();

    const interestedIn = currentUser.interestedIn || [];
    const potentialMatches = [];
    const likedProfileIds = currentUser.likedProfiles || [];
    const dislikedProfileIds = currentUser.dislikedProfiles || [];

    let potentialMatchesQuery = firestore().collection('users');

    if (likedProfileIds.length > 0 || dislikedProfileIds.length > 0) {
      potentialMatchesQuery = potentialMatchesQuery.where(
        firestore.FieldPath.documentId(),
        '!=',
        userId
      );
    }

    const potentialMatchesSnapshot = await potentialMatchesQuery.get();

    potentialMatchesSnapshot.forEach((doc) => {
      const match = doc.data();
      const { gender, selectedOrientation } = match;

      const isInterested = interestedIn.some(
        (interest) =>
          (interest.gender === gender || interest.gender === 'Everyone') &&
          selectedOrientation === interest.sexualOrientation
      );

      if (isInterested) {
        const potentialMatchWithKeys = {
          id: doc.id,
          image: getObjectWithNonNullUrl(match.photos),
          descr:
            'I am john. I like to sing, cook, and play pool. I’m a surgeon and I don’t like olives.',
          isLiked: false,
          isDisliked: false,
          isHeart: false,
          interests: ['Chess', 'Cricket'],
          name: match.name,
        };

        potentialMatches.push(potentialMatchWithKeys);
      }
    });

    // Remove potential matches that are both liked and disliked
    const filteredMatches = potentialMatches.filter(
      (match) => !likedProfileIds.includes(match.id) && !dislikedProfileIds.includes(match.id)
    );

    return filteredMatches;
  } catch (error) {
    console.error('Error retrieving potential matches:', error);
    return [];
  }
};

export const checkMatch = async (userId, profileId) => {
  try {
    const userRef = firestore().collection('users').doc(userId);
    const profileRef = firestore().collection('users').doc(profileId);

    const userDoc = await userRef.get();
    const profileDoc = await profileRef.get();

    const userData = userDoc.data();
    const profileData = profileDoc.data();

    if (userData && profileData) {
      const userLikes = userData.ilikeIt || [];
      const profileMatches = profileData.ilikeIt || [];

      const isMatch = userLikes.includes(profileId) && profileMatches.includes(userId);

      if(isMatch){
        userRef.update({
          matches: firestore.FieldValue.arrayUnion(profileId),
          ilikeIt: firestore.FieldValue.arrayRemove(profileId)
        })
        profileRef.update({
          matches: firestore.FieldValue.arrayUnion(userId),
          ilikeIt: firestore.FieldValue.arrayRemove(userId)
        })
      }

      return isMatch;
    }

    return false;
  } catch (error) {
    console.error('Error checking match:', error);
    return false;
  }
};

export const likeProfile = async (userId, profileId) => {
  try {
    const userRef = firestore().collection('users').doc(userId);
    const matchUserRef = firestore().collection('users').doc(profileId);
    await userRef.update({
      likedProfiles: firestore.FieldValue.arrayUnion(profileId),
      ilikeIt: firestore.FieldValue.arrayUnion(profileId),
      dislikedProfiles: firestore.FieldValue.arrayRemove(profileId),
    });
    await matchUserRef.update({
      uLikeMe: firestore.FieldValue.arrayUnion(userId),
    });
  } catch (error) {
    console.error('Error liking profile:', error);
  } finally {
    console.log('here')
    checkMatch(userId, profileId)
  }
};

export const unlikeProfile = async (userId, profileId) => {
  try {
    const userRef = firestore().collection('users').doc(userId);
    await userRef.update({
      dislikedProfiles: firestore.FieldValue.arrayUnion(profileId),
      likedProfiles: firestore.FieldValue.arrayRemove(profileId),
    });
    console.log('Profile unliked successfully!');
  } catch (error) {
    console.error('Error unliking profile:', error);
  }
};

export const fetchMatches = async (userId) => {
  try {
    const userRef = firestore().collection('users').doc(userId);
    const snapshot = await userRef.get();
    const data = snapshot.data();
    return data.matches;
  } catch (error) {
    console.log('Error fetching matches:', error);
    return null;
  }
}
