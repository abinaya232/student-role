import * as React from "react"
import Svg, { Path } from "react-native-svg"

function GalleryIcon(props) {
  return (
    <Svg
      width={16}
      height={24}
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.166.083A5.417 5.417 0 004.749 5.5v10.833a3.25 3.25 0 004.492 3.003 3.24 3.24 0 001.998-3.003V5.5H9.082v10.833a1.083 1.083 0 01-2.167 0V5.5a3.25 3.25 0 116.5 0v10.969c0 2.992-2.425 5.28-5.417 5.28a5.417 5.417 0 01-5.416-5.416v-5.416H.416v5.416A7.583 7.583 0 0010.9 23.34a7.571 7.571 0 004.672-7.006V5.5A5.407 5.407 0 0010.166.083z"
        fill="#2A3663"
      />
    </Svg>
  )
}

export default GalleryIcon;
