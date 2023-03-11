import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import HomeScreen from "./CoreScreens/HomeScreen";
import { ThemeProvider } from "@mui/material/styles";
import { AppTheme } from "./Theme.js";
import "./App.css";

require("typeface-oswald");

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#E6EFDF",
          padding: 1,
        }}
      >
        <Router>
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
