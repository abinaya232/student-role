import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ClockIcon(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13 23a10 10 0 100-20 10 10 0 000 20zM13 .5a12.5 12.5 0 110 25C6.088 25.5.5 19.875.5 13A12.5 12.5 0 0113 .5zm.625 6.25v6.563l5.625 3.337-.938 1.538-6.562-3.938v-7.5h1.875z"
        fill="#2A3663"
      />
    </Svg>
  )
}

export default ClockIcon;
