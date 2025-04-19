import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BedIcon(props) {
  return (
    <Svg
      width={24}
      height={20}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.5 15.5V11l.676-.184a37.34 37.34 0 0119.648 0L22.5 11v4.5m-21 0s0 3-1.5 3m1.5-3h21m0 0s0 3 1.5 3M3.5 8c0-1.989-.297-3.966-.882-5.867L2.5 1.75V1.5h19v.25l-.118.383A20.002 20.002 0 0020.5 8M12 4.5H6.5V8M12 4.5V8m0-3.5h5.5V8"
        stroke="#2A3663"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default BedIcon;
