
import {Project, Navbar} from '@/components'
import { pokedexThumbnail } from '@/assets/images'
import { useEffect, useRef, useState } from 'react'

export default function Home() {

  const intervalRef = useRef(null);
  const [isMax, setIsMax] = useState(false)
  const [terminal, setTerminal] = useState(false)
  const [caret, setCaret] = useState(true)


  useEffect(()=>{
    if(isMax){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto' 
    }
  }, [isMax])

  useEffect(()=>{
    
    const timeout = setTimeout(() => {

      intervalRef.current = setInterval(() => {
          setCaret(prev=>!prev)
      }, 500);
    }, 1400);

    return () => {
      clearTimeout(timeout)
      clearInterval(intervalRef.current)
    }
  }, [])
  
  return(
    <>
    <Navbar />

      <div className="pt-[30vh] pb-[10vh] flex flex-col gap-[10vw] items-center">

        <nav id='intro' class='absolute top-0' ></nav>
        <div className='flex flex-col gap-[10vh] w-[60vw] '>
            <div id='terminal' className='flex gap-1'>
              <span className="font-bold text-3xl text-white font-stack-sans-notch overflow-hidden whitespace-nowrap type-intro">
                
                  &gt; <span className="type-name">M</span>
                  <span className="type-name">i</span>
                  <span className="type-name">g</span>
                  <span className="type-name">u</span>
                  <span className="type-name">e</span>
                  <span className="type-name">l</span> <span className="type-name">F</span>
                  <span className="type-name">l</span>
                  <span className="type-name">a</span>
                  <span className="type-name">n</span>
                  <span className="type-name">d</span>
                  <span className="type-name">e</span>
                  <span className="type-name">z</span>
                
                
              </span>

              <span className={`${caret ? 'text-3xl text-white font-stack-sans-notch' : 'hidden'}`}>|</span>
            </div>
            

            <span  className="text-white font-mono" >
            <span className="font-bold">Front-End Web Developer </span>
            specializing in React. <a className={`${terminal ? 'hidden' : '' } text-white font-mono cursor-pointer hover:underline hover:text-[#43d5db]`} onClick={()=>setTerminal(prev=>!prev)} href='#terminal' >Click for more Details</a>
            </span>
            
            {terminal && <div className={`${isMax ? 'w-screen h-screen fixed top-0 left-0 z-20':'relative'} bg-black rounded-sm  text-white font-mono`}>
              <div className='flex gap-1 absolute right-1 top-1'>
                {isMax && <i className="fa-regular fa-window-minimize hover:text-[#e1cb7e]" onClick={()=>setIsMax(prev=>!prev)}></i>}
                {!isMax && <i className="fa-regular fa-window-maximize hover:text-[#e1cb7e]" onClick={()=>setIsMax(prev=>!prev)}></i>}
                <a href="#intro" className='leading-none'><i className="fa-solid fa-xmark hover:text-[#e1cb7e]" onClick={()=>{setTerminal(false); setIsMax(false)}}></i></a> 
              </div>

              <div className='flex flex-col gap-[1vw] m-[1vw] text-[#e1cb7e]'>
                <div className='flex flex-col'>
                  <span>&gt; Miguel.contacts</span>
                  <span span>["<a className='hover:underline text-[#43d5db]' target='_blank'  href='https://www.facebook.com/miguel.flandez.9659/'>Facebook</a>", "<a className='hover:underline text-[#43d5db]' target='_blank' href='https://www.linkedin.com/in/isaiah-miguel-flandez-ba7260346/'>LinkedIn</a>", "<a className='hover:underline text-[#43d5db]' target='_blank' href='https://github.com/Miguel-Flandez'>Github</a>", "isaiahmiguelflandez@gmail.com"]</span>
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
                  <textarea className={`${isMax ? 'h-screen' : '' } outline-none border-none resize-none overflow-hidden w-full pl-[1vw] max-md:pl-[2vw] max-sm:pl-[3vw]`}/>
                </div>
                
                
                

                
              </div>
              
            </div>}

            <div id="tech-stack" className='flex items-center justify-between text-white max-lg:flex-col max-lg:gap-[1vw]'>
              
              
              <span className='font-mono text-white text-xl border-white'>Tech Stack</span>
              
              

              <div className='flex gap-[8vw] text-4xl font-mono'>
                  <div className='flex flex-col items-center'>
                    <i class="fa-brands fa-html5 hover:text-[#e4522c]"></i>
                    <span className='text-sm'>HTML</span>
                  </div>
                  
                  <div className='flex flex-col items-center'>
                    <i class="fa-brands fa-css3-alt hover:text-[#2c52e4]"></i>
                    <span className='text-sm'>CSS</span>
                  </div>

                  <div className='flex flex-col items-center'>
                    <i class="fa-brands fa-square-js hover:text-[#f0dc54]"></i>
                    <span className='text-sm'>JavaScript</span>
                  </div>
                  
                  <div className='flex flex-col items-center'>
                    <i className="fa-brands fa-react hover:text-[#5dc5dd] hover:animate-bounce animate-delat"></i>
                    <span className='text-sm'>React.js</span>
                  </div>
                  

                  <div className='flex flex-col items-center'>
                    <i class="fa-brands fa-vuejs hover:text-[#46ba86]"></i>
                    <span className='text-sm'>Vue.js</span>
                  </div>
                  
              </div>

        
            </div>

            
        
        </div>

        

        <nav id="showcase"></nav>
        <div className='flex gap-[2vw] items-center'>
          {/* <div>&lt;</div>  */}
              <div id="projects" className="flex flex-col w-[60vw] overflow-hidden gap-[10vh]">
                <div className="flex gap-1">
                  <span className="font-bold font-stack-sans-notch text-3xl text-white overflow-hidden whitespace-nowrap">
                    &gt; <span className='type-projects'>P</span>
                    <span className='type-projects'>r</span>
                    <span className='type-projects'>o</span>
                    <span className='type-projects'>j</span>
                    <span className='type-projects'>e</span>
                    <span className='type-projects'>c</span>
                    <span className='type-projects'>t</span>
                    <span className='type-projects'>s</span>
                  </span>
                  <span className={`${caret ? 'text-3xl text-white font-stack-sans-notch' : 'hidden'}`}>|</span>
                </div>
                  
                  <div id="projects-container" className="flex justify-evenly flex-wrap">
                      <a href='https://pokedex-gamma-ruby.vercel.app/' target='_blank'>
                      <Project name="Pokedex" description="A Pokédex web app built with React and the PokéAPI.
                      It fetches and displays Pokémon data like names, sprites, and details." 
                      thumbnail={pokedexThumbnail} framework='react'
                      /></a>
                      <Project name="Pomodoro" description="Work in short bursts to manage your focus and energy" 
                      thumbnail={pokedexThumbnail} framework='react'/>
                      <Project name="Pokedex" description="pending..." thumbnail={pokedexThumbnail}/>
                      <Project name="Pokedex" description="pending..." thumbnail={pokedexThumbnail}/>
                      <Project name="Pokedex" description="pending..." thumbnail={pokedexThumbnail}/>
                      <Project name="Pokedex" description="pending..." thumbnail={pokedexThumbnail}/>
                  </div>
              </div>
          {/* <div>&gt;</div> */}
        </div>
        

        <nav id="contacts"></nav>
        <div  className='flex flex-col gap-[2vw]'>
          <div id="sm-icons" className='flex justify-evenly'>
            <a target='_blank' href="https://www.facebook.com/miguel.flandez.9659/"><i className="fa-brands fa-facebook text-white hover:text-[#415ca0]"  ></i></a>
            <a target='_blank' href="https://www.linkedin.com/in/isaiah-miguel-flandez-ba7260346/"><i className="fa-brands fa-square-linkedin text-white hover:text-[#0882bd]"></i></a>
            <a target='_blank' href="https://github.com/Miguel-Flandez"><i className="fa-brands fa-github text-white hover:text-[#892c95]"></i></a>
          </div>
          
          
          <span className='text-[#8a8a8a] font-mono'>Or email me at isaiahmiguelflandez@gmail.com</span>
        </div>

      </div>
    </>
  )

}
