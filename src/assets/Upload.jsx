import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Upload(props) {
  return (
    <Svg
      width={19}
      height={18}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.333 5.667L9.499 1.5m0 0l4.167 4.167M9.499 1.5v10m8.334 0v3.333a1.666 1.666 0 01-1.667 1.667H2.833a1.667 1.667 0 01-1.667-1.667V11.5"
        stroke="#F9FAFB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Upload;
