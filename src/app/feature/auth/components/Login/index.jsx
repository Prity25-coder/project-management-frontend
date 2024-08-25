import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  Stack,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";

import { login } from "../../Thunk/authThunk";
import { authSelector } from "../../slices/authSlice";
import { ButtonWithLink } from "../../../../common/components";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(authSelector);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const data = { email, password };
      console.log({ loginData: data });

      dispatch(login(data));
    },
    [dispatch, email, password]
  );

  return (
    <Stack alignItems="center" justifyContent="center" height={"90vh"}>
      <Card raised sx={{ padding: 3, width: "60%" }}>
        {error && <Alert severity="error">{error}</Alert>}
        <Stack gap={2}>
          <Stack
            gap={2}
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h4" align="center">
              Login
            </Typography>

            <ButtonWithLink to="/signup" size="small">
              Create new account
            </ButtonWithLink>
          </Stack>
          <form onSubmit={handleOnSubmit}>
            <Stack gap={2}>
              <TextField
                fullWidth
                label="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <TextField
                fullWidth
                label="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Stack>

            <Stack alignItems={"flex-end"} paddingTop={1}>
              <Button
                type="submit"
                variant="contained"
                color="success"
                disabled={loading}
              >
                {loading ? "Logging In..." : "Login"}
              </Button>
            </Stack>
          </form>
        </Stack>
      </Card>
    </Stack>
  );
};

export default Login;
