import firestore from '@react-native-firebase/firestore'

import { firestoreDB } from './firebase';

export const createChat = async (userId1, userId2) => {
    try {
      const chatRef = await firestoreDB().collection('chats').add({
        participants: [userId1, userId2],
      });
  
      const chatId = chatRef.id;
  
      // Add the chat ID to userId1's conversations
      const user1Ref = firestoreDB().doc(`users/${userId1}`);
      await user1Ref.update({
        conversations: firestore.FieldValue.arrayUnion({
          participantId: userId2,
          chatId: chatId,
        }),
      });
  
      // Add the chat ID to userId2's conversations
      const user2Ref = firestoreDB().doc(`users/${userId2}`);
      await user2Ref.update({
        conversations: firestore.FieldValue.arrayUnion({
          participantId: userId1,
          chatId: chatId,
        }),
      });
  
      console.log(chatId);
      return chatId;
    } catch (error) {
      console.log('Error creating chat:', error);
      return null;
    }
};
  

export const checkAndCreateChat = async (userId1, userId2) => {
    try {
      const userRef = firestoreDB().doc(`users/${userId1}`);
      const snapshot = await userRef.get();
      const conversations = snapshot.data().conversations || [];
  
      // Find the conversation object with the matching participantId
      const matchingConversation = conversations.find(
        (conversation) => conversation.participantId === userId2
      );
  
      // If a matching conversation is found, return its chatId
      if (matchingConversation) {
        return matchingConversation.chatId;
      }
  
      // If no matching conversation is found, create a new chat
      const newChatRef = await createChat(userId1, userId2)
  
      // Return the ID of the newly created chat
      return newChatRef;
    } catch (error) {
      console.log('Error checking and creating chat:', error);
      return null;
    }
  };

  export const sendMessage = async (chatId, senderId, messageText) => {
    try {
      const chatRef = firestore().collection('chats').doc(chatId);
  
      // Create a new message object
      const newMessage = {
        senderId: senderId,
        messageText: messageText,
        timestamp: firestore.Timestamp.fromDate(new Date()),
      };
  
      // Update the messages array in the chat document
      await chatRef.update({
        messages: firestore.FieldValue.arrayUnion(newMessage),
      });
  
      console.log('Message sent:', newMessage);
    } catch (error) {
      console.log('Error sending message:', error);
    }
  };
  
  export const monitorMessageUpdates = (chatId, setMessages) => {
    const chatRef = firestoreDB().collection('chats').doc(chatId);
  
    const unsubscribe = chatRef.onSnapshot((snapshot) => {
      const chatData = snapshot.data();
      const messages = chatData ? chatData.messages : [];
        
      setMessages(messages);
      console.log('Updated messages:', messages);
    });
  
    // Return the unsubscribe function to stop listening
    return unsubscribe;
  };
  
  