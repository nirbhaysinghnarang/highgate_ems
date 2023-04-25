import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import HomeScreen from "./CoreScreens/HomeScreen";
import LoginScreen from "./CoreScreens/LoginScreen";
import { ThemeProvider } from "@mui/material/styles";
import { AppTheme } from "./Theme.js";
import ProjectUpload from "./CoreScreens/ProjectUpload";
import "./App.css";

require("typeface-oswald");

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#E6EFDF",
          padding: 2,
        }}
      >
        <Router>
          <Routes>
            <Route path="/auth" element={<LoginScreen></LoginScreen>}/>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/projects/upload" element={<ProjectUpload></ProjectUpload>}/>
            <Route path="*" element={<HomeScreen />} />
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
