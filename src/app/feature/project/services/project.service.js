import axiosInstance from "../../../../config/axios.config";

class ProjectService {
  createNewProject = async (projectInfo) => {
    return await axiosInstance.post("/projects", projectInfo);
  };

  getProjectById = async (projectId) => {
    return await axiosInstance.get(`/projects/${projectId}`);
  };

  updateProject = async (projectId, projectInfo) => {
    return await axiosInstance.patch(`/projects/${projectId}`, projectInfo);
  };

  deleteProject = async (projectId) => {
    return await axiosInstance.delete(`/projects/${projectId}`);
  };
}

const projectService = new ProjectService();

export default projectService;
