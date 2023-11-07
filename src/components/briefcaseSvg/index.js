import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

const BriefcaseSvg = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={88.194} height={80} {...props}>
    <Defs>
      <LinearGradient
        id="a"
        x1={0.5}
        x2={1.178}
        y2={1.191}
        gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#6735ec" />
        <Stop offset={1} stopColor="#ff56ff" />
      </LinearGradient>
    </Defs>
    <Path
      data-name="Path 401"
      d="M81.375 18.842H63.736v-8.421A8.6 8.6 0 0 0 54.916 2H37.278a8.6 8.6 0 0 0-8.819 8.421v8.421h-17.64a8.559 8.559 0 0 0-8.775 8.421L2 73.579A8.6 8.6 0 0 0 10.819 82h70.556a8.6 8.6 0 0 0 8.819-8.421V27.263a8.6 8.6 0 0 0-8.819-8.421Zm-26.458 0H37.278v-8.421h17.638Z"
      transform="translate(-2 -2)"
      fill="url(#a)"
    />
  </Svg>
);

export default BriefcaseSvg;
