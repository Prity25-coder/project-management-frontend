import { useEffect } from "react";

import { RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";

import appRoutes from "./app.routes";
import { fetchLoggedInUser } from "./feature/auth/Thunk/authThunk";
import { authSelector } from "./feature/auth/slices/authSlice";
import { FullScreenSpinner } from "./common/components";

// Step 1: Create a custom theme with a slightly off-white background
const theme = createTheme({
  palette: {
    background: {
      default: "#f7f7f7", // A very light grey, less white than pure white (#ffffff)
    },
  },
});

function App() {
  const dispatch = useDispatch();
  const { loading, isAppReady } = useSelector(authSelector);

  useEffect(() => {
    dispatch(fetchLoggedInUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading && <FullScreenSpinner />}
      {isAppReady && <RouterProvider router={appRoutes} />}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  );
}

export default App;
