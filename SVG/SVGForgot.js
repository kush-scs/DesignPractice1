/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, {Rect, Defs, Pattern, Use, Image} from 'react-native-svg';
function SvgComponent2() {
  return (
    <Svg
      width={70}
      height={70}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <Rect width={60} height={65} fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use xlinkHref="#image0_31_58" transform="scale(0.000526316)" />
        </Pattern>
        <Image
          id="image0_31_58"
          width={1900}
          height={1900}
        />
      </Defs>
    </Svg>
  );
}
export default SvgComponent2;