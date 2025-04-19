import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = ({ width = 24, height = 24, fill = "#7D8699", ...props }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M2 18.167h4.308v-6.865h5.385v6.865h4.308v-10.5L9 2.372 2 7.667v10.5zM.835 19.333V7.083L9.001.914l8.166 6.17v12.25h-6.64v-6.865H7.475v6.864H.834z"
        fill={fill}
        stroke={fill}
      />
    </Svg>
  );
};

export default HomeIcon;
