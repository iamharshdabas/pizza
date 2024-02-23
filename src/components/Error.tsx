import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  const navigate = useNavigate()

  const handleBack = () => navigate(-1)

  return (
    <div>
      <h1>Something Went Wrong</h1>
      <h2>{error.data || error.message}</h2>
      <button onClick={handleBack}>back</button>
    </div>
  )
}

export default Error
