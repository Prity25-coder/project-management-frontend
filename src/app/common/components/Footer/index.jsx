import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "burlywood",
        color: "white",
        textAlign: "center",
        py: 2,
        mt: 2,
      }}
    >
      <Typography variant="h6">I am footer</Typography>
    </Box>
  );
};

export default Footer;
