export const BaseUrl = `www.google.com`;

export function getInterestedIn(gender, sexualOrientation) {
    console.log(gender, sexualOrientation)
    const interestedIn = [];
  
    switch (sexualOrientation) {
      case 'Heterosexual':
        if (gender === 'Men') {
          interestedIn.push({ gender: 'Women', sexualOrientation: 'Heterosexual' });
        } else if (gender === 'Women') {
          interestedIn.push({ gender: 'Men', sexualOrientation: 'Heterosexual' });
        }
        break;
      case 'Gay':
        if (gender === 'Men') {
          interestedIn.push({ gender: 'Men', sexualOrientation: 'Gay' });
        }
        break;
      case 'Lesbian':
        if (gender === 'Women') {
          interestedIn.push({ gender: 'Women', sexualOrientation: 'Lesbian' });
        }
        break;
      case 'Bisexual':
        interestedIn.push({ gender: 'Men', sexualOrientation: 'Bisexual' });
        interestedIn.push({ gender: 'Women', sexualOrientation: 'Bisexual' });
        break;
      case 'Asexual':
        // Asexual individuals may not have specific gender preferences, so interested in any gender
        interestedIn.push({ gender: 'Men', sexualOrientation: 'Asexual' });
        interestedIn.push({ gender: 'Women', sexualOrientation: 'Asexual' });
        interestedIn.push({ gender: 'Non-Binary', sexualOrientation: 'Asexual' });
        // Add other gender options as needed
        break;
      case 'Demisexual':
        // Similar to asexual individuals, interested in any gender
        interestedIn.push({ gender: 'Men', sexualOrientation: 'Demisexual' });
        interestedIn.push({ gender: 'Women', sexualOrientation: 'Demisexual' });
        interestedIn.push({ gender: 'Non-Binary', sexualOrientation: 'Demisexual' });
        // Add other gender options as needed
        break;
      case 'Pansexual':
        // Interested in any gender
        interestedIn.push({ gender: 'Men', sexualOrientation: 'Pansexual' });
        interestedIn.push({ gender: 'Women', sexualOrientation: 'Pansexual' });
        interestedIn.push({ gender: 'Non-Binary', sexualOrientation: 'Pansexual' });
        // Add other gender options as needed
        break;
      case 'Queer':
        // Interested in any gender
        interestedIn.push({ gender: 'Men', sexualOrientation: 'Queer' });
        interestedIn.push({ gender: 'Women', sexualOrientation: 'Queer' });
        interestedIn.push({ gender: 'Non-Binary', sexualOrientation: 'Queer' });
        // Add other gender options as needed
        break;
      case 'I have doubts':
        // Open to exploring various sexual orientations and genders
        interestedIn.push({ gender: 'Men' });
        interestedIn.push({ gender: 'Women' });
        interestedIn.push({ gender: 'Non-Binary' });
        interestedIn.push({ gender: 'Other' });
        // Add other gender options as needed
        break;
      default:
        break;
    }
  
    return interestedIn;
  }
  