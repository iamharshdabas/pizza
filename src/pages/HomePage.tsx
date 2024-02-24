import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    navigate('/menu')
  }

  return (
    <>
      <h1 className="mt-32 text-4xl font-extrabold uppercase">
        We provide <span className="stroke">fast and </span>
        <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
          mouthwatering
        </span>
        <span className="stroke"> pizza </span>
        at your doorsteps.
      </h1>
      <h2 className="mt-16 text-xl">
        Satisfy Your Cravings in Every Bite – Order Now for a Flavorful Pizza
        Feast!
      </h2>
      <button
        onClick={handleClick}
        className="mt-8 rounded-full bg-amber-600 px-4 py-2 font-bold uppercase text-stone-900"
      >
        order now
      </button>
    </>
  )
}

export default HomePage
