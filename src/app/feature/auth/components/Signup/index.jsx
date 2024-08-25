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

import { signup } from "../../Thunk/authThunk";
import { authSelector } from "../../slices/authSlice";
import { ButtonWithLink } from "../../../../common/components";

const Signup = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(authSelector);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const data = { username, email, password };
      console.log({ signupData: data });

      dispatch(signup(data));
    },
    [dispatch, username, email, password]
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
              Sign Up
            </Typography>

            <ButtonWithLink to="/login" size="small">
              Already have account
            </ButtonWithLink>
          </Stack>
          <form onSubmit={handleOnSubmit}>
            <Stack gap={2}>
              <TextField
                fullWidth
                label="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

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
                {loading ? "Signing Up..." : "Signup"}
              </Button>
            </Stack>
          </form>
        </Stack>
      </Card>
    </Stack>
  );
};

export default Signup;
