import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Outing(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 21a10 10 0 1110-10m0 10L11 11m10 10v-6m0 6h-6"
        stroke="#4A5B9B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Outing;
