import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../../services/authService"
import { AuthContext } from "../../context/AuthContext"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const users = await loginUser(email, password)

    if (users.length > 0) {
      login(users[0])
      navigate("/admin")
    } else {
      alert("Email və ya şifrə yanlışdır")
    }
  }

  return (
    <div style={{ width: "300px", margin: "100px auto" }}>
      <h2>Admin Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
