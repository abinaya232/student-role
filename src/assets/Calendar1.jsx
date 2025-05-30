import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

function ProfCalendar(props) {
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
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <Path fill="#D9D9D9" d="M0 0H24V24H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M14.5 18c-.7 0-1.292-.242-1.775-.725C12.242 16.792 12 16.2 12 15.5s.242-1.292.725-1.775C13.208 13.242 13.8 13 14.5 13s1.292.242 1.775.725c.483.483.725 1.075.725 1.775s-.242 1.292-.725 1.775c-.483.483-1.075.725-1.775.725zM5 22c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 013 20V6c0-.55.196-1.02.587-1.412A1.926 1.926 0 015 4h1V2h2v2h8V2h2v2h1c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0119 22H5zm0-2h14V10H5v10zM5 8h14V6H5v2z"
          fill="#2A3663"
        />
      </G>
    </Svg>
  )
}

export default ProfCalendar;
