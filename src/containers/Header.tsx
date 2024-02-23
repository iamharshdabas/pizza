import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import React, { useState } from 'react'

const Header = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate(`/order/${query}`)
  }

  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={handleChange}
          placeholder="Search Order"
        />
      </form>
    </div>
  )
}

export default Header
