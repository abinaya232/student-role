import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChatIconActive(props) {
  return (
    <Svg
      width={20}
      height={18}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 0c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C3.55 18 0 18 0 18c2.33-2.33 2.7-3.9 2.75-4.5C1.05 12.07 0 10.13 0 8c0-4.42 4.5-8 10-8z"
        fill="#2A3663"
      />
    </Svg>
  )
}

export default ChatIconActive;
