  
// let tasks = [
//   {
//     id: 1,
//     title: "Learn html",
//     duration: 60,
//   },
//   {
//     id: 2,
//     title: "Learn react",
//     duration: 30,
//   },
//   {
//     id: 3,
//     title: "Learn node",
//     duration: 50,
//   },
// ]

// // function delay(ms) {
// //   return new Promise((resolve) => setTimeout(resolve, ms))
// // }

// export const fetchTasks = () => {
//   // await delay(1000)
//   return tasks
// }
// export const fetchTasksByFilter = (searchValue) => {
//   // await delay(1000)
//   return tasks.filter((task) => task.title.includes(searchValue))
// }

// export const fetchTaskById = (id) => {
//   // await delay(1000)
//   const task = tasks.find((task) => task.id === id)
//   return task
// }

// export const addTask = (task) => {
//   // await delay(1000)
//   const newTask = {
//     id: tasks.length + 1,
//     title: task.title,
//     duration: +task.duration,
//   }

//   tasks = tasks.concat(newTask)
//   return newTask
// }

// export const deleteTask = (id) => {
//   // await delay(1000)
//   tasks = tasks.filter((task) => task.id !== id)
// }

// export const updateTask = (id, task) => {
//   // await delay(1000)
//   const updatedTask = { id, title: task.title, duration: task.duration }
//   tasks = tasks.map((task) => (task.id === id ? updatedTask : task))
//   return updatedTask
// }



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
