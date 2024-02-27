import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    navigate('/menu')
  }

  return (
    <>
      <h1 className="mt-32 text-3xl font-extrabold uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        We provide <span className="stroke">fast & </span>
        <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
          mouthwatering pizza
        </span>{' '}
        at your doorsteps.
      </h1>
      <h2 className="mt-16 text-lg md:text-xl xl:text-2xl">
        Satisfy Your Cravings in Every Bite – Order Now for a Flavorful Pizza
        Feast!
      </h2>
      <button
        onClick={handleClick}
        className="mt-8 rounded-xl bg-amber-600 px-4 py-2 font-bold uppercase text-black"
      >
        order now
      </button>
    </>
  )
}

export default HomePage
