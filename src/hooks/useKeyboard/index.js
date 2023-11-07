import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

const emptyCoordinates = {
  screenX: 0,
  screenY: 0,
  width: 0,
  height: 0,
};
const initialValue = {
  start: emptyCoordinates,
  end: emptyCoordinates,
};

export function useKeyboard() {
  const [shown, setShown] = useState(false);
  const [coordinates, setCoordinates] = useState(initialValue);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const handleKeyboardWillShow = (e) => {
    setCoordinates({start: e.startCoordinates, end: e.endCoordinates});
  };
  const handleKeyboardDidShow = (e) => {
    setShown(true);
    setCoordinates({start: e.startCoordinates, end: e.endCoordinates});
    setKeyboardHeight(e.endCoordinates.height);
  };
  const handleKeyboardWillHide = (e) => {
    setCoordinates({start: e.startCoordinates, end: e.endCoordinates});
  };
  const handleKeyboardDidHide = (e) => {
    setShown(false);
    if (e) {
      setCoordinates({start: e.startCoordinates, end: e.endCoordinates});
    } else {
      setCoordinates(initialValue);
    }
    setKeyboardHeight(0);
  };

  useEffect(() => {
    const willShowListener = Keyboard.addListener(
      'keyboardWillShow',
      handleKeyboardWillShow,
    );
    const didShowListener = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardDidShow,
    );
    const willHideListener = Keyboard.addListener(
      'keyboardWillHide',
      handleKeyboardWillHide,
    );
    const didHideListener = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardDidHide,
    );
    return () => {
      willShowListener.remove();
      didShowListener.remove();
      willHideListener.remove();
      didHideListener.remove();
    };
  }, []);

  return {
    keyboardShown: shown,
    coordinates,
    keyboardHeight,
  };
}
