import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Playground(props) {
  return (
    <Svg
      width={20}
      height={14}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 0a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h16zm0 2h-7v2.17a3 3 0 01.172 5.592L11 9.83V12h7v-1h-2a2 2 0 01-1.995-1.85L14 9V5a2 2 0 011.85-1.995L16 3h2V2zM9 2H2v1h2a2 2 0 011.995 1.85L6 5v4a2 2 0 01-1.85 1.995L4 11H2v1h7V9.83a3.001 3.001 0 01-.172-5.592L9 4.17V2zm9 3h-2v4h2V5zM4 5H2v4h2V5zm6 1a1 1 0 100 2 1 1 0 000-2z"
        fill="#4A5B9B"
      />
    </Svg>
  )
}

export default Playground;
