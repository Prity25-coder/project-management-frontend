import PropTypes from "prop-types";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

import { Edit as EditIcon } from "@mui/icons-material";
import ButtonWithLink from "../../../../common/components/ButtonWithLink";
import IconButtonWithLink from "../../../../common/components/IconButtonWithLink";

const Project = ({ projectInfo = {} }) => {
  const { projectName, description, status, id } = projectInfo;

  return (
    <Card sx={{ p: 2 }} elevation={3}>
      <CardHeader
        title={projectName}
        sx={{ p: 0 }}
        action={
          <Stack direction="row" spacing={1}>
            {/* Edit Icon Button */}
            <IconButtonWithLink
              aria-label="edit"
              color="primary"
              to={`/projects/edit-project/${id}`}
            >
              <EditIcon />
            </IconButtonWithLink>
          </Stack>
        }
      />
      <CardContent sx={{ p: 0 }}>
        <Stack direction={"row"} alignContent={"center"} gap={1}>
          <Typography>Status</Typography>
          <Chip
            variant="outlined"
            color="primary"
            size="small"
            label={status}
          />
        </Stack>
        <Typography>Description</Typography>
        <Typography
          sx={{
            fontSize: 14,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            color: "GrayText",
          }}
        >
          {description}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          justifyContent: "flex-end",
        }}
      >
        <ButtonWithLink
          to={`/projects/${id}`}
          size="small"
          variant="contained"
          color="info"
        >
          View Details
        </ButtonWithLink>
      </CardActions>
    </Card>
  );
};

Project.propTypes = {
  projectInfo: PropTypes.object.isRequired,
};

export default Project;
