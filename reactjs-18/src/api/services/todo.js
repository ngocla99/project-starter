import axiosClient from "@/api/axios"

export const getTodos = async () => {
  const response = await axiosClient.get("/todos")
  return response.data
}

export const getTodo = async (todoId) => {
  const response = await axiosClient.get(`/todos/${todoId}`)
  return response.data
}

export const createTodo = async (todo) => {
  return await axiosClient.post("/todos", todo)
}

export const updateTodo = async (todo) => {
  return await axiosClient.patch(`/todos/${todo.id}`, todo)
}

export const deleteTodo = async (todoId) => {
  return await axiosClient.delete(`/todos/${todoId}`)
}
