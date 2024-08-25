import { useCallback } from "react";

import {
  Box,
  Alert,
  Grid,
  Typography,
  Chip,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useParams } from "react-router-dom";

import useAxios from "../../../../common/hooks/useAxios";
import IconButtonWithLink from "../../../../common/components/IconButtonWithLink";
import projectService from "../../services/project.service";
import alertService from "../../../../common/service/alert.service";

function ProjectDetails() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  console.log(projectId);

  const [loading, error, data] = useAxios(`/projects/${projectId}`);

  const handleDelete = useCallback(
    async (projectId) => {
      const canDelete = confirm("Are you sure want to delete?");

      if (!canDelete) return;

      try {
        const { data } = await projectService.deleteProject(projectId);
        alertService.success(data.message);
        navigate("/projects");
      } catch (error) {
        alertService.error(error.message);
      }
    },
    [navigate]
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <Alert severity="error">{error.message}</Alert>;

  const { projectName, description, status } = data?.data?.project || {};

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card
            raised
            sx={{ padding: 3, display: "flex", flexDirection: "column" }}
          >
            <CardHeader
              title={<Typography variant="h6">{projectName}</Typography>}
              action={
                <Stack direction="row" spacing={1}>
                  {/* Edit Icon Button */}
                  <IconButtonWithLink
                    aria-label="edit"
                    color="primary"
                    to={`/projects/edit-project/${projectId}`}
                  >
                    <EditIcon />
                  </IconButtonWithLink>

                  {/* Delete Icon Button */}
                  <IconButton
                    onClick={() => handleDelete(projectId)}
                    aria-label="delete"
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              }
            />
            <CardContent>
              <Typography variant="body1" sx={{ mb: 2 }}>
                <strong>Description:</strong> {description}
              </Typography>

              <Stack direction={"row"} alignContent={"center"} gap={1}>
                <Typography>Status</Typography>
                <Chip
                  variant="outlined"
                  color="primary"
                  size="small"
                  label={status}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            raised
            sx={{
              padding: 3,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Todo */}
            <Typography variant="h6">Tasks (Work in Progress)</Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectDetails;
