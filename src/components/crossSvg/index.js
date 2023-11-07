import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

function CrossSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25.071}
      height={25.071}
      viewBox="0 0 25.071 25.071"
      {...props}>
      <G
        fill="none"
        stroke={props.stroke ? props.stroke : '#6735ec'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
        fillRule="evenodd">
        <Path
          d="M18 0L0 18"
          transform="translate(2.536 2.536) translate(1 1)"
        />
        <Path
          data-name="Shape"
          d="M0 0l18 18"
          transform="translate(2.536 2.536) translate(1 1)"
        />
      </G>
    </Svg>
  );
}

export default CrossSvg;
