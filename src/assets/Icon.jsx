import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LogIcon(props) {
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
        d="M6.5 5h14v17h-14V5z"
        stroke="#2A3663"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M17.5 5V2H4a.5.5 0 00-.5.5V19h3m4-8h6m-6 4h6"
        stroke="#2A3663"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LogIcon;
