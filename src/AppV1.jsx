import { Button, Typography, styled } from "@mui/material";
import "./App.css";
import { Add, Settings } from "@mui/icons-material";
// import { Add } from "@mui/icons-material";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "#2241ff",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#2211ff",
      color: "white",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });

  return (
    <>
      <Typography variant="h1" component="p">
        Hello guys new to MU
      </Typography>
      <Button variant="contained">Hello World</Button>
      <Button variant="contained" startIcon={<Settings />} color="myColor">
        Settings
      </Button>
      <BlueButton variant="contained" startIcon={<Add />}>
        Add New Post
      </BlueButton>
    </>
  );
}

export default App;
