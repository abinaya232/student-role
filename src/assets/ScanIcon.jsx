import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ScanIcon(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0H0v6h2V2h4V0zM0 18v-6h2v4h4v2H0zM12 0v2h4v4h2V0h-6zm4 12h2v6h-6v-2h4v-4zM4 4h4v4H4V4zm0 6h4v4H4v-4zm10-6h-4v4h4V4zm-4 6h4v4h-4v-4z"
        fill="#F9FAFB"
      />
    </Svg>
  )
}

export default ScanIcon;
