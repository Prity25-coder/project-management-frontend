import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  MenuItem,
  Stack,
  Alert,
} from "@mui/material";
import projectService from "../../services/project.service";
import ButtonWithLink from "../../../../common/components/ButtonWithLink";
import alertService from "../../../../common/service/alert.service";
import { useNavigate, useParams } from "react-router-dom";

// Status options for the project
const statusOptions = ["Not Started", "In Progress", "Completed"];

const CreateProject = () => {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { projectId } = useParams();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(projectName || description || status)) {
      setError("Project name, description and status is required.");
    }

    // Creating the project data object
    const projectData = {
      projectName,
      description,
      status,
    };

    // Call service to create project
    try {
      setLoading(true);
      setError(null);

      if (projectId) {
        const { data } = await projectService.updateProject(
          projectId,
          projectData
        );
        alertService.success(data.message);
        navigate("/projects");
      } else {
        const { data } = await projectService.createNewProject(projectData);
        alertService.success(data.message);
      }
      console.log("project created");

      // alert that successfully created

      // Clear form fields after submission
      setProjectName("");
      setDescription("");
      setStatus("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (projectId) {
      async function fetchProductInfo() {
        try {
          const { data } = await projectService.getProjectById(projectId);
          const {
            data: { project },
          } = data;

          const { projectName, description, status } = project;
          setProjectName(projectName);
          setDescription(description);
          setStatus(status);
        } catch (error) {
          alertService.error(error.message);
        }
      }

      fetchProductInfo();
    }
  }, [projectId]);

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 4 }} elevation={5}>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Create a New Project
          </Typography>
          <Stack spacing={2}>
            {/* Project Name Input */}
            <TextField
              label="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
              fullWidth
            />

            {/* Description Input */}
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              multiline
              rows={4}
              fullWidth
            />

            {/* Status Select Input */}
            <TextField
              select
              label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              fullWidth
            >
              {statusOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </CardContent>

        {/* Submit Button */}
        <CardActions>
          <ButtonWithLink to="/projects" variant="contained" color="info">
            Cancel
          </ButtonWithLink>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            {getBtnText(projectId, loading)}
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

function getBtnText(projectId, loading) {
  if (projectId) {
    return loading ? "Updating project..." : "Update";
  } else {
    return loading ? "Creating project..." : "Submit";
  }
}

export default CreateProject;
