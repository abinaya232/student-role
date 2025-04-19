import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function LogsRight(props) {
  return (
    <Svg
      width={38}
      height={38}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_319_2909)">
        <Rect
          x={34}
          y={34}
          width={32}
          height={32}
          rx={16}
          transform="rotate(-180 34 34)"
          fill="#D0D8E0"
          shapeRendering="crispEdges"
        />
        <Path
          d="M23.079 17.5l-5.793-5.792L18 11l7 7-7 7-.714-.708L23.08 18.5H11v-1h12.079z"
          fill="#7F94AA"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default LogsRight;
