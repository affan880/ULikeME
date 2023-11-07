import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const ArrowDownSvg = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <G data-name="Layer 2">
      <Path
        data-name="Path 260"
        d="M18.621 10.17a1 1 0 0 1-.37.78l-6 4.83a1 1 0 0 1-1.27 0l-6-5a1.001 1.001 0 0 1 1.28-1.54l5.36 4.467 5.36-4.32a1 1 0 0 1 1.64.783Z"
        fill={props?.fill ? props.fill : '#6735ec'}
      />
    </G>
  </Svg>
);

export default ArrowDownSvg;
