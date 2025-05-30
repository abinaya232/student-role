import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ChatIcon({ width = 24, height = 24, fill = "#7D8699", ...props }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 3C6.5 3 2 6.58 2 11a7.22 7.22 0 002.75 5.5c0 .6-.42 2.17-2.75 4.5 2.37-.11 4.64-1 6.47-2.5 1.14.33 2.34.5 3.53.5 5.5 0 10-3.58 10-8s-4.5-8-10-8zm0 14c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z"
        fill={fill} // Dynamically sets the color
        stroke={fill} // Ensure stroke color also changes
      />
    </Svg>
  );
}

export default ChatIcon;
