import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

const IconButtonWithLink = ({ children, to, sx, ...rest }) => {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      <IconButton {...rest} sx={sx}>
        {children}
      </IconButton>
    </Link>
  );
};

IconButtonWithLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  sx: PropTypes.object,
};

export default IconButtonWithLink;
