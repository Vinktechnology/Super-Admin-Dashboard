import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import AppRoutes from "./AppRoutes";
import Toast from "./components/Toast/Toast";
import Loader from "./components/Loader/Loader";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
        <Toast />
        <Loader />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
