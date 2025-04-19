import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FileIcon(props) {
  return (
    <Svg
      width={22}
      height={24}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 23l6-6m1-3a2 2 0 102 2M8 23H1V1h18v10M1 13h14M1 18h10M1 8h18m-4-4h1v1h-1V4z"
        stroke="#4A5B9B"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default FileIcon;
