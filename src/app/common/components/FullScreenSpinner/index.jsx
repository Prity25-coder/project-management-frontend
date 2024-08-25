import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const FullScreenSpinner = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
        zIndex: 9999, // Ensure it is above other components
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default FullScreenSpinner;
