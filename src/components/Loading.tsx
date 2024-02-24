// https://codepen.io/Bilal1909/pen/pobgJae
const Loading = () => {
  const bars = new Array(10).fill(0)

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-stone-900/40 backdrop-blur-md">
      {bars.map(() => (
        <div className="wave m-2 h-16 w-2 rounded-lg bg-amber-600"></div>
      ))}
    </div>
  )
}

export default Loading
