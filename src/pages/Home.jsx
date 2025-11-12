
import {Project, Navbar} from '@/components'
import { pokedexThumbnail } from '@/assets/images'

export default function Home() {
  
  return(
    <>
    <Navbar />

      <div className="pt-[30vh] pb-[10vh] flex flex-col gap-[10vw] items-center">

        <nav id='intro' class='absolute top-0' ></nav>
        <div className='flex flex-col gap-[10vh] w-[60vw] '>
            <span className="font-bold text-3xl text-white font-stack-sans-notch">Miguel Flandez</span>

            <span className="text-white font-mono">
            <span className="font-bold">Front-End Web Developer </span>
            specializing in React and Tailwind.
            </span>

            <div id="tech-stack" className='flex items-center justify-between text-white'>
              <div>
                <span className='font-mono font-bold text-white'>Tech Stack |</span>
              </div>
              
            <div className='flex gap-[8vw]  text-4xl'>
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css3-alt"></i>
                <i class="fa-brands fa-square-js"></i>
                <i className="fa-brands fa-react"></i>
                <i class="fa-brands fa-vuejs"></i>
            </div>
              

        </div>
        
      </div>
        

        <nav id="showcase"></nav>
        <div className='flex gap-[2vw] items-center'>
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
        

        <nav id="contacts"></nav>
        <div  className='flex flex-col gap-[2vw]'>
          <div id="sm-icons" className='flex justify-between'>
            <a href="https://www.facebook.com/miguel.flandez.9659/"><i className="fa-brands fa-facebook text-white"></i></a>
            <a href="https://www.linkedin.com/in/isaiah-miguel-flandez-ba7260346/"><i className="fa-brands fa-square-linkedin text-white"></i></a>
            <a href="https://github.com/Miguel-Flandez"><i className="fa-brands fa-github text-white"></i></a>
          </div>
          
          
          <span className='text-[#8a8a8a] font-mono'>Or email me at isaiahmiguelflandez@gmail.com</span>
        </div>

      </div>
    </>
  )

}
