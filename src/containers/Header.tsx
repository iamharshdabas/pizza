import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
    <div className="flex items-center justify-between py-4">
      <Link className="text-xl font-bold" to={'/'}>
        PIZZA Co.
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          className="w-32 rounded-xl bg-amber-900 px-4 py-2 placeholder:text-gray-200 md:focus:w-48"
          value={query}
          onChange={handleChange}
          placeholder="Search Order"
        />
      </form>
    </div>
  )
}

export default Header
