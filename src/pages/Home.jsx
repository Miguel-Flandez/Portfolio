
import {Project} from '@/components'
import { pokedexThumbnail } from '@/assets/images'

export default function Home() {
  
  return(
    <div className="py-[15vh] flex flex-col gap-[10vh] m-auto items-center">

    <div id="intro" className='flex flex-col gap-[10vh] w-[60vw] '>
        <span className="font-bold text-3xl text-white font-stack-sans-notch">Miguel Flandez</span>

        <span className="text-white">
        <span className="font-stack-sans-notch font-bold">Front-End Web Developer </span>
        specializing in <a href="https://react.dev/" className="underline">React</a> and <a href="https://tailwindcss.com/" className="underline">Tailwind</a>.
        </span>

    </div>
      <div id='showcase' className='flex gap-[2vw] items-center'>
        {/* <div>&lt;</div>  */}
            <div id="projects" className="flex flex-col w-[60vw] overflow-hidden">
                <span className="font-bold font-stack-sans-notch text-3xl text-white">Projects</span>
                <div id="projects-container" className="flex justify-evenly flex-nowrap">
                    <Project name="Pokedex" description="pending..." thumbnail={pokedexThumbnail}/>
                    <Project name="Pokedex" description="pending..." thumbnail={pokedexThumbnail}/>
                    <Project name="Pokedex" description="pending..." thumbnail={pokedexThumbnail}/>
                </div>
             </div>
        {/* <div>&gt;</div> */}
      </div>
      
      <div id="contacts" className='flex justify-between'>
        <a href="https://www.facebook.com/miguel.flandez.9659/"><i className="fa-brands fa-facebook text-white"></i></a>
        <a href="https://www.linkedin.com/in/isaiah-miguel-flandez-ba7260346/"><i className="fa-brands fa-square-linkedin text-white"></i></a>
        <a href="https://github.com/Miguel-Flandez"><i className="fa-brands fa-github text-white"></i></a>
      </div>

    </div>
  )

}
