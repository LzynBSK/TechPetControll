import React, { useEffect, useRef } from 'react';
import { Animated, TextInput } from 'react-native';

const ShakingInput = ({ inputStyle, style, isError, ...props }) => {
  const shakeAnimationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (props.isError) {
      shakeAnimationValue.setValue(1);
      Animated.spring(shakeAnimationValue, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }
  }, [props.isError]);

  const animatedStyle = {
    transform: [
      {
        translateX: shakeAnimationValue.interpolate({
          inputRange: [0, 0.25, 0.5, 0.75, 1],
          outputRange: [0, -10, 0, 10, 0],
        }),
      },
    ],
  };

  return (
    <Animated.View style={animatedStyle}>
      <TextInput {...props} style={[inputStyle, style]} />
    </Animated.View>
  );
};

export default ShakingInput;
