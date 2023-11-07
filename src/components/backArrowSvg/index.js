import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackArrowSvg = props => (
  <Svg
    data-name="Layer 2"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...props}>
    <Path
      data-name="Path 260"
      d="M16.009 24.001a1.714 1.714 0 0 1-1.337-.634L6.391 13.081a1.714 1.714 0 0 1 0-2.177L14.962.619a1.716 1.716 0 0 1 2.64 2.194L9.94 12.001l7.405 9.188a1.714 1.714 0 0 1-1.336 2.812Z"
      fill={props?.fill ? props.fill : '#6735ec'}
    />
  </Svg>
);

export default BackArrowSvg;
