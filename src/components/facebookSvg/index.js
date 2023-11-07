import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FacebookSvg = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={props?.height ? props.height : 10.39} height={props?.width ? props?.width : 20} {...props}>
        <Path
            data-name="Path 259"
            d="M8.51 3.32h1.88V.14A26.11 26.11 0 0 0 7.65 0C4.93 0 3.07 1.66 3.07 4.7v2.62H0v3.56h3.07V20h3.68v-9.12h3.06l.46-3.56H6.75V5.05c0-1.05.28-1.73 1.76-1.73Z"
            fill="#6735ec"
        />
    </Svg>
)

export default FacebookSvg