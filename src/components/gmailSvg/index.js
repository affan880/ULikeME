import * as React from "react"
import Svg, { Path } from "react-native-svg"

const GmailSvg = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={props?.height ? props.height : 24} height={props?.width ? props?.width : 18} {...props}>
        <Path
            data-name="Path 258"
            d="M22 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM12 6.88 4.07 1h15.86Zm-8-.67 7.7 5.69a.5.5 0 0 0 .59 0L20 6.21V17H4Z"
            fill="#6735ec"
        />
    </Svg>
)

export default GmailSvg