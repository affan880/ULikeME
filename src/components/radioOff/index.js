import * as React from 'react';
import Svg, {G, Path, Circle} from 'react-native-svg';

const RadioOffSvg = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33.556}
    height={33.556}
    {...props}>
    <G data-name="Group 5818">
      <Path d="M33.556 33.556H0V0h33.556Z" fill="none" />
      <G transform="rotate(180 16.778 13.283)" fill="#6735ec">
        <Path
          data-name="Path 397"
          d="M23.769 19.574H9.787A9.787 9.787 0 1 1 9.787 0h13.982a9.787 9.787 0 0 1 0 19.574ZM9.787 2.8a6.991 6.991 0 1 0 0 13.982h13.982a6.991 6.991 0 0 0 0-13.982Z"
        />
        <Circle
          data-name="Ellipse 159"
          cx={4}
          cy={4}
          r={4}
          transform="translate(20 5.564)"
        />
      </G>
    </G>
  </Svg>
);

export default RadioOffSvg;
