import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CalendarSvg = props => (
  <Svg
    data-name="Group 5840"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...props}>
    <Path data-name="Path 403" d="M0 0h24v24H0Z" fill="none" />
    <Path
      data-name="Path 404"
      d="M20 3h-1V2a1 1 0 0 0-2 0v1H7V2a1 1 0 0 0-2 0v1H4a2.006 2.006 0 0 0-2 2v16a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V5a2.006 2.006 0 0 0-2-2Zm-1 18H5a1 1 0 0 1-1-1V8h16v12a1 1 0 0 1-1 1Z"
      fill="#fff"
    />
  </Svg>
);

export default CalendarSvg;
