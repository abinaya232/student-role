import * as React from "react"
import Svg, { Path } from "react-native-svg"

function GroupIcon(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.375 24.083h-.708a1.417 1.417 0 01-1.417-1.416 4.25 4.25 0 014.25-4.25h1.417m0-4.321a3.541 3.541 0 112.833-6.304m14.875 16.291h.708a1.417 1.417 0 001.417-1.416 4.25 4.25 0 00-4.25-4.25h-1.417m0-4.321a3.541 3.541 0 10-2.833-6.304m.708 19.125h-9.916a1.417 1.417 0 01-1.417-1.417 4.25 4.25 0 014.25-4.25h4.25a4.25 4.25 0 014.25 4.25 1.417 1.417 0 01-1.417 1.417zm-1.416-13.459a3.542 3.542 0 11-7.084 0 3.542 3.542 0 017.084 0z"
        stroke="#405161"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default GroupIcon;
