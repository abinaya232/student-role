import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

function LogIconActive(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={1}
        width={20}
        height={22}
      >
        <Path
          d="M6.5 5h14v17h-14V5z"
          fill="#fff"
          stroke="#fff"
          strokeWidth={2}
          strokeLinejoin="round"
        />
        <Path
          d="M17.5 5V2H4a.5.5 0 00-.5.5V19h3"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.5 11h6m-6 4h6"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Mask>
      <G mask="url(#a)">
        <Path d="M0 0h24v24H0V0z" fill="#2A3663" />
      </G>
    </Svg>
  )
}

export default LogIconActive;
