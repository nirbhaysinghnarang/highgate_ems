import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import HomeScreen from "./CoreScreens/HomeScreen";
import "./App.css";
function App() {
  return (
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
  );
}

export default App;
