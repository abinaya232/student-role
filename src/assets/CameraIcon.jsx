import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CameraIcon(props) {
  return (
    <Svg
      width={24}
      height={22}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.467 2.833L7.133 5.167H2.667v14h18.667v-14h-4.466l-2.333-2.334H9.467zM8.5.5h7l2.333 2.333h4.667A1.167 1.167 0 0123.667 4v16.333a1.167 1.167 0 01-1.166 1.167h-21a1.167 1.167 0 01-1.167-1.167V4a1.167 1.167 0 011.167-1.167h4.666L8.501.5zM12 18a6.416 6.416 0 110-12.833A6.416 6.416 0 0112 18zm0-2.333A4.083 4.083 0 1012 7.5a4.083 4.083 0 000 8.167z"
        fill="#4A5B9B"
      />
    </Svg>
  )
}

export default CameraIcon;
