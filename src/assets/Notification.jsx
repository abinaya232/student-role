import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NotifyIcon(props) {
  return (
    <Svg
      width={20}
      height={22}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 2.74V6a3 3 0 110 6v3c0 1.648-1.882 2.589-3.2 1.6l-2.06-1.546A8.66 8.66 0 008 13.446v2.844a2.71 2.71 0 01-5.317.744l-1.57-5.496a4.7 4.7 0 013.326-7.73l3.018-.168a9.34 9.34 0 004.19-1.26l2.344-1.367C15.325.236 17 1.197 17 2.74zM3.632 13.079l.973 3.407A.71.71 0 006 16.29v-3.01l-1.56-.087a4.991 4.991 0 01-.806-.115zM15 2.74L12.654 4.11A11.3 11.3 0 018 5.604v5.819c1.787.246 3.488.943 4.94 2.03L15 15V2.74zM6 5.724l-1.45.08a2.7 2.7 0 00-.17 5.377l.17.015 1.45.08V5.724zM17 8v2a1 1 0 00.117-1.993L17 8z"
        fill="#2A3663"
      />
    </Svg>
  )
}

export default NotifyIcon;
