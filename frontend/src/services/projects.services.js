import { ApiRequest } from "@/services/index";


const getAllProjects = async() => {
  try {
    return ApiRequest.get()
  } catch (error) {
    return []
  }
}

const getMyProjects = async() => {
  try {
    return await ApiRequest.get()
  } catch (error) {
    return []
  }
}

const createProject = async() =>{
  try {
    await ApiRequest.post()
    return 
  } catch (error) {
    return
  }
}

const deleteProject = async() => {
  try {
    await ApiRequest.delete()
    return
  } catch (error) {
    return
  }
}

const updateProject = async() => {
  try {
    await ApiRequest.put()
    return 
  } catch (error) {
    return
  }
}



export {
  createProject,
  deleteProject,
  getAllProjects,
  getMyProjects,
  updateProject
}