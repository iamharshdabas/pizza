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
    <div className="flex justify-between py-4">
      <Link className="text-2xl font-bold uppercase tracking-widest" to={'/'}>
        pizza Co.
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          className="w-40 rounded-2xl bg-amber-800 px-4 py-1 placeholder:text-stone-100"
          value={query}
          onChange={handleChange}
          placeholder="Search Order"
        />
      </form>
    </div>
  )
}

export default Header
