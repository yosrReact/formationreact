let tasks = [
  {
    id: "1",
    title: "Learn html",
    duration: 60,
  },
  {
    id: "2",
    title: "Learn react",
    duration: 30,
  },
  {
    id: "3",
    title: "Learn node",
    duration: 50,
  },
]

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const fetchTasks = async () => {
  await delay(1000)
  return tasks
}
export const fetchTasksByFilter = async (searchValue) => {
  await delay(1000)
  return tasks.filter((task) => task.title.includes(searchValue))
}

export const fetchTaskById = async (id) => {
  const task = tasks.find((task) => task.id === id)
  return task
}

export const addTask = async (task) => {
  const newTask = {
    id: tasks.length + 1,
    title: task.title,
    duration: task.duration,
  }

  tasks=tasks.concat(newTask)
  return newTask
}

export const deleteTask = async (id) => {
  tasks = tasks.filter((task) => task.id !== id)
}

export const updateTask = async (id, task) => {
  const updatedTask = { id, title: task.title, duration: task.duration }
  tasks = tasks.map((task) => (task.id === id ? updatedTask : task))
  return updatedTask
}
