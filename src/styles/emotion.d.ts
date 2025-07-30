import "@emotion/react";
import {
  lightModeTypes,
  darkModeTypes,
  BorderRadiusTypes,
  ColorTypes,
  DeviceSizeTypes,
  FontSizeTypes,
  WindowSizeTypes,
} from "./theme";

declare module "@emotion/react" {
  export interface Theme extends MuiTheme {
    mode: lightModeTypes | darkModeTypes;
    deviceSize: DeviceSizeTypes;
    windowSize: WindowSizeTypes;
    colors: ColorTypes;
    fontSize: FontSizeTypes;
    borderRadius: BorderRadiusTypes;
  }
}
