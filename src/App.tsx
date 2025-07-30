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
import { BackgroundManager, GlobalStyled } from "./component/layouts";

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
            <CursorProvider>
              <Routes>
                <Route path="/" element={<Main />}></Route>
              </Routes>
              <Cursor />
            </CursorProvider>
          </BrowserRouter>
          <BackgroundManager />
          <GlobalStyled />
        </TimeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
