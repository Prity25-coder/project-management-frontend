import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ButtonWithLink = ({ children, to, sx, ...rest }) => {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      <Button {...rest} sx={sx}>
        {children}
      </Button>
    </Link>
  );
};

ButtonWithLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  sx: PropTypes.object,
};

export default ButtonWithLink;
