import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LeaveIcon(props) {
  return (
    <Svg
      width={24}
      height={23}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.34 6.04l5.22 5.21-5.22 5.21-1.05-1.05 3.408-3.407-.003-.003-.002-.003H9.004v-1.493h11.691v-.01L17.291 7.09l1.049-1.05zm-4.836 8.964h1.492v7.492H.004V.004h14.992v7.492h-1.492V1.5H13.5v-.004h-12V1.5h-.004V21H1.5v.004h12V21h.004v-5.996z"
        fill="#4A5B9B"
        stroke="#4A5B9B"
        strokeWidth={0.0078125}
      />
    </Svg>
  )
}

export default LeaveIcon;
