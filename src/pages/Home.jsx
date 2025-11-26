
import {Project, Navbar} from '@/components'
import { pokedexThumbnail } from '@/assets/images'
import { useEffect, useRef, useState } from 'react'

export default function Home() {

  const intervalRef = useRef();
  const [isMax, setIsMax] = useState(false)
  const [caret, setCaret] = useState(true)

  useEffect(()=>{
    if(isMax){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto' 
    }
  }, [isMax])

  useEffect(()=>{
    

    intervalRef.current = setInterval(() => {
        setCaret(prev=>!prev)
        console.log(caret)
    }, 500);

    return () => clearInterval(intervalRef.current)
  }, [])
  
  return(
    <>
    <Navbar />

      <div className="pt-[30vh] pb-[10vh] flex flex-col gap-[10vw] items-center">

        <nav id='intro' class='absolute top-0' ></nav>
        <div className='flex flex-col gap-[10vh] w-[60vw] '>
            <div className='flex gap-1'>
              <span className="font-bold text-3xl text-white font-stack-sans-notch">&gt; Miguel Flandez</span>
              <span className={`${caret ? 'text-3xl text-white font-stack-sans-notch' : 'hidden'}`}>|</span>
            </div>
            

            <span className="text-white font-mono">
            <span className="font-bold">Front-End Web Developer </span>
            specializing in React.
            </span>

            <div id='summary' className={`${isMax ? 'w-screen h-screen fixed top-0 left-0 z-20':'relative'} bg-black rounded-sm  text-white font-mono`}>
              <div className='flex gap-1 absolute right-1 top-1'>
                <i className="fa-regular fa-window-minimize"></i>
                <i className="fa-regular fa-window-maximize" onClick={()=>setIsMax(prev=>!prev)}></i>
                <i className="fa-solid fa-xmark"></i>
              </div>

              <div className='flex flex-col gap-[1vw] m-[1vw] text-[#e1cb7e]'>
                <div className='flex flex-col'>
                  <span>&gt; Miguel.contacts</span>
                  <span span>["<a className='hover:underline text-[#43d5db]'  href='https://www.facebook.com/miguel.flandez.9659/'>Facebook</a>", "<a className='hover:underline text-[#43d5db]' href='https://www.linkedin.com/in/isaiah-miguel-flandez-ba7260346/'>LinkedIn</a>", "<a className='hover:underline text-[#43d5db]' href='https://github.com/Miguel-Flandez'>Github</a>", "isaiahmiguelflandez@gmail.com"]</span>
                </div>

                <div className='flex flex-col'>
                <span>&gt; Miguel.resume</span>
                <span>"<a className='hover:underline text-[#43d5db]' href='links/Flandez_Resume.pdf'>Flandez_Resume.pdf</a>"</span>
               </div>
               
               <div className='flex flex-col'>
                <span>&gt; Miguel.education</span>
                <span>"Lyceum of the Philippines Laguna - BSIT"</span>
               </div>

               <div className='flex flex-col'>
                <span>&gt; Miguel.interests</span>
                <span>["fitness", "video games", "anime", "shopping"]</span>
               </div>
                
                <div className='flex flex-col'>
                  <span>&gt; Miguel["currently-learning"]</span>
                  <span>["Node.js", "Next.js", "MongoDB", "Redux"]</span>
                </div>

                <div className="relative w-full">
                  <span className='absolute left-0'>&gt;</span>
                  <textarea className='outline-none border-none resize-none overflow-hidden w-full pl-[1vw] max-md:pl-[2vw] max-sm:pl-[3vw]'/>
                </div>
                
                
                

                
              </div>
              
            </div>

            <div id="tech-stack" className='flex items-center justify-between text-white max-lg:flex-col max-lg:gap-[1vw]'>
              
                <span className='font-mono text-white text-2xl'>Tech Stack: </span>

              
              
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
                <div className="flex gap-1">
                  <span className="font-bold font-stack-sans-notch text-3xl text-white">&gt; Projects</span>
                  <span className={`${caret ? 'text-3xl text-white font-stack-sans-notch' : 'hidden'}`}>|</span>
                </div>
                  
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
