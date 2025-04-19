import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function LogsLeft(props) {
  return (
    <Svg
      width={38}
      height={38}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_319_2905)">
        <Rect
          x={2}
          y={2}
          width={32}
          height={32}
          rx={16}
          fill="#D0D8E0"
          shapeRendering="crispEdges"
        />
        <Path
          d="M12.921 18.5l5.793 5.792L18 25l-7-7 7-7 .714.708L12.92 17.5H25v1H12.921z"
          fill="#7F94AA"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default LogsLeft;
