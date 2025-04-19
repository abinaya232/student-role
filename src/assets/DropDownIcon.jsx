import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DropDown(props) {
  return (
    <Svg
      width={14}
      height={9}
      viewBox="0 0 14 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13 1.5l-6 6-6-6"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default DropDown;
