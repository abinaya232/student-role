import * as React from "react"
import Svg, { Path } from "react-native-svg"

function OthersIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.4 2.1l-9.193 9.193a1 1 0 000 1.414L11.4 21.9a1 1 0 001.414 0l9.192-9.193a1 1 0 000-1.414L12.813 2.1a1 1 0 00-1.414 0v0z"
        stroke="#4A5B9B"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M9 12h6m-3-3v6"
        stroke="#4A5B9B"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default OthersIcon;
