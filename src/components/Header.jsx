import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="w-full h-20 flex items-center mb-10 z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
  <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-center">
    <div className="relative md:justify-self-center">
      <span className="material-symbols-rounded">
        <Navbar />
      </span>
    </div> 
  </div>
</header>

  )
}

export default Header