const tasks = [
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
