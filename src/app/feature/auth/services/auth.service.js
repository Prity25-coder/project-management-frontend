import {
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../../../../config/firebase.config";
import axiosInstance from "../../../../config/axios.config";

class AuthService {
  signup = async ({ email, password, username }) => {
    // call auth api to get token
    console.log({ signUpData: { email, password, username } });

    const response = await axiosInstance.post("/auth/signup", {
      email,
      password,
      username,
    });

    console.log(response);

    const { jwt_token, verify_link } = response.data.data;
    console.log({ verify_link });

    return await this.#loginWithToken(jwt_token);
  };

  login = async ({ email, password }) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  logout = async () => {
    const userId = auth.currentUser.uid;

    // don't wait to complete this request
    axiosInstance.post("/auth/logout", { userId });

    await signOut(auth);
    return true;
  };

  getUserIdToken = async () => {
    return await auth.currentUser?.getIdToken();
  };

  #loginWithToken = async (token) => {
    const user = await signInWithCustomToken(auth, token);
    return user;
  };
}

const authService = new AuthService();

export default authService;
