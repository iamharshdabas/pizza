import { useNavigate, useRouteError } from 'react-router-dom'
import Button from './Button'

const Error = () => {
  const error = useRouteError()
  const navigate = useNavigate()

  const handleBack = () => navigate(-1)

  return (
    <div>
      <h1>Something Went Wrong</h1>
      <h2>{error.data || error.message}</h2>
      <Button onCLick={handleBack}>Back</Button>
    </div>
  )
}

export default Error
