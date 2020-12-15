import Axios from "axios"


export const addTask = async (task) => {
  const result = await Axios.post(
    "https://heroku-boot-todoapp-seif.herokuapp.com/tasks/",
    task
  )
  return result.data
}

export const updateTask = async (id, task) => {
  const result = await Axios.put(
    "https://heroku-boot-todoapp-seif.herokuapp.com/tasks/" + id,
    task
  )
  return result.data
}

export const deleteTask = async (id) => {
  const result = await Axios.delete(
    "https://heroku-boot-todoapp-seif.herokuapp.com/tasks/" + id
  )
  return result.data
}

export const fetchTaskById = async (taskId) => {
  const result = await Axios.get(
    "https://heroku-boot-todoapp-seif.herokuapp.com/tasks/" + taskId
  )
  return result.data
}

export const fetchTasks = async () => {
  // await delay(500)
  const result = await Axios.get(
    "https://heroku-boot-todoapp-seif.herokuapp.com/tasks/"
  )
  return result.data._embedded.tasks
}
