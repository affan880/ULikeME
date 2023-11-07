import * as React from 'react';
import Svg, {G, Circle} from 'react-native-svg';

const MenuDotsSvg = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={6} height={24} {...props}>
    <G data-name="Group 5734" transform="translate(-346.923 -484)" fill="#fff">
      <Circle
        data-name="Ellipse 144"
        cx={3}
        cy={3}
        r={3}
        transform="translate(346.923 484)"
      />
      <Circle
        data-name="Ellipse 145"
        cx={3}
        cy={3}
        r={3}
        transform="translate(346.923 493)"
      />
      <Circle
        data-name="Ellipse 146"
        cx={3}
        cy={3}
        r={3}
        transform="translate(346.923 502)"
      />
    </G>
  </Svg>
);

export default MenuDotsSvg;
