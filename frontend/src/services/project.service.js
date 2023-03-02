import { ApiRequest } from "@/services/index";

export const getProjects = async () => {
  try {
    return await ApiRequest.get("/project");
  } catch (error) {
    return [];
  }
};

export const getProject = async (id) => {
  try {
    return await ApiRequest.get("/project/" + id);
  } catch (error) {
    return {};
  }
};

export const createProject = async (project) => {
  try {
    return await ApiRequest.post("/project/register", {});
  } catch (error) {
    return {};
  }
};
