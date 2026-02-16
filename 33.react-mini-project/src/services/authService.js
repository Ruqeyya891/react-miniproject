import axios from "axios"
import { API_URL } from "../constants/api"

export const loginUser = async (email, password) => {
  const res = await axios.get(
    `${API_URL}/users?email=${email}&password=${password}`
  )

  return res.data
}
