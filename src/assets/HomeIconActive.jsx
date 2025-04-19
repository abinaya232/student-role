import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeIconActive(props) {
  return (
    <Svg
    width={24} // Set to 24x24
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
      <Path
        d="M21.667 11.332v11.501H16.61v-7.448h-5.219v7.448H6.334v-11.5l7.667-5.792 7.666 5.791z"
        fill="#2A3663"
        stroke="#2A3663"
      />
    </Svg>
  )
}

export default HomeIconActive;
