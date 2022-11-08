import {Animated, TouchableOpacity, Easing} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../contacts/thems';

const containerStyle = (size, isActive) => ({
  borderRadius: 32,
  backgroundColor: isActive ? COLORS.background : COLORS.toggleColor,
  height: 32 * size,
  width: 64 * size,
  padding: 4 * size,
});
const toggleStyle = (size, animatedValue) => ({
  height: 24 * size,
  width: 24 * size,
  backgroundColor: COLORS.primary,
  borderRadius: 32,
  transform: [
    {
      translateX: animatedValue,
    },
  ],
});

const ToggleButton = ({size}) => {
  const [isActive, setActive] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  const toggleHandle = () => {
    Animated.timing(animatedValue, {
      toValue: isActive ? 0 : 32 * size,
      duration: 250,
      easing: Easing.bounce,
      delay: 0,
      useNativeDriver: true,
    }).start();
    setActive(!isActive);
  };

  return (
    <TouchableOpacity
      style={containerStyle(size, isActive)}
      onPress={() => toggleHandle()}
      activeOpacity={0.8}>
      <Animated.View style={toggleStyle(size, animatedValue)} />
    </TouchableOpacity>
  );
};

export default ToggleButton;
