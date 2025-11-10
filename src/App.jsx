

export default function App() {
  
  return(
    <div className="h-screen w-screen py-[15vh] px-[25vw] flex flex-col justify-between">
      <span className="font-bold text-3xl text-white">Miguel Flandez</span>

      <span className="text-white">
        <span className="font-roboto text-xl">Front-End Web Developer </span> <span className="font-sans text-xl">Front-End Web Developer</span>
        specializing in <a href="https://react.dev/" className="underline">React</a> and <a href="https://tailwindcss.com/" className="underline">Tailwind</a>.
      </span>

      <div id="projects" className="flex flex-col">
        <span className="font-bold text-3xl text-white">Projects</span>
        <div id="projects-container" className="flex">

        </div>
      </div>

    </div>
  )

}
