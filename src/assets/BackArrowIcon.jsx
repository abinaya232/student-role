import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackArrow(props) {
  return (
    <Svg
      width={11}
      height={18}
      viewBox="0 0 11 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.343 9l7.072 7.07L9 17.486 1.222 9.707a1 1 0 010-1.414L9 .515l1.415 1.414-7.072 7.07z"
        fill="#F9FAFB"
      />
    </Svg>
  )
}

export default BackArrow;
