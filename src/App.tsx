import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { useEffect, useState } from "react";
import { useDarkMode } from "usehooks-ts";
import { darkTheme } from "./styles/theme";
import { CursorProvider } from "./context/CursorContext";
import { Cursor } from "./component/Cursor/Cursor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./page/Main";
import { TimeProvider } from "./context/TimeContext";
import { GlobalStyled } from "./component/layouts";
import { AppleStyle } from "./page/AppleStyle";
import { WindowContextProvider } from "./context/WindowContext";
import { NetflixStyle } from "./page/NetflixStyle";
import { Suni } from "./page/Suni";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : darkTheme}>
        <TimeProvider>
          <BrowserRouter>
            <WindowContextProvider>
              <CursorProvider>
                <Routes>
                  <Route path="/" element={<Main />}></Route>
                  <Route path="/suni" element={<Suni />}></Route>
                  <Route path="/apple" element={<AppleStyle />}></Route>
                  <Route path="/netflix" element={<NetflixStyle />}></Route>
                </Routes>
                <Cursor />
              </CursorProvider>
            </WindowContextProvider>
          </BrowserRouter>
          <GlobalStyled />
        </TimeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
