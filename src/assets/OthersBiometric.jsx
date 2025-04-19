import * as React from "react"
import Svg, { Path } from "react-native-svg"

function OthersBiometric(props) {
  return (
    <Svg
      width={20}
      height={24}
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 8.7c0-3.63 0-5.445 1.318-6.572C3.636 1 5.758 1 10 1c4.243 0 6.364 0 7.682 1.127C19 3.255 19 5.07 19 8.7v6.6c0 3.63 0 5.445-1.318 6.572C16.364 23 14.242 23 10 23c-4.243 0-6.364 0-7.682-1.128C1 20.745 1 18.93 1 15.3V8.7z"
        stroke="#4A5B9B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.143 13.1v-2.75c0-1.167-.542-2.286-1.506-3.111C12.672 6.414 11.364 5.95 10 5.95c-1.364 0-2.672.464-3.636 1.289-.965.825-1.507 1.944-1.507 3.111v2.75"
        stroke="#4A5B9B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.93 10.9v-.55c0-.438-.204-.857-.566-1.167a2.105 2.105 0 00-1.363-.483c-.512 0-1.002.174-1.364.483-.362.31-.565.73-.565 1.167v3.85m3.857-.55v1.65m-1.928 4.4v.011"
        stroke="#4A5B9B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default OthersBiometric;
