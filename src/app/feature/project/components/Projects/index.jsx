import { Box, Grid } from "@mui/material";
import Project from "../Project";
import useAxios from "../../../../common/hooks/useAxios";
import FullScreenSpinner from "../../../../common/components/FullScreenSpinner";

function Projects() {
  const [loading, error, data] = useAxios("/projects");

  if (loading) {
    return <FullScreenSpinner />; // todo spinner not working
  }

  if (error) {
    // todo
  }

  const projects = data?.data?.projects;

  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {projects?.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Project projectInfo={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
