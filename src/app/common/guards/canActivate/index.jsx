import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";

import { authSelector } from "../../../feature/auth/slices/authSlice";
import { useEffect } from "react";

function CanActivate({ children, authentication = false, isPrivate = false }) {
  const navigate = useNavigate();

  const { loading, user } = useSelector(authSelector);
  console.log(loading, user);

  useEffect(() => {
    if (authentication) {
      console.log(user, isPrivate);

      if (!isPrivate && user) {
        navigate("/projects");
      }

      if (isPrivate && !user) {
        navigate("/login");
      }
    }
  }, [user, navigate, authentication, isPrivate]);

  return children; // todo
}

CanActivate.propTypes = {
  children: propTypes.node.isRequired,
  authentication: propTypes.bool,
  isPrivate: propTypes.bool,
};

export default CanActivate;
