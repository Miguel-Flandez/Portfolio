export default function Project({name, description, thumbnail, framework}){
    
    
    return(
        <div id="container" className="text-sm w-[20vw] max-lg:w-[60vw] h-[45vh] max-sm:h-[35vh] shrink-0 hover:bg-[rgba(100,100,100,0.2)] max-sm:border-b-white hover:-translate-y-1 transition-all  border border-transparent flex flex-col items-center gap-[1vw] rounded-md pt-[1vw] px-[1vw] cursor-pointer relative">
            <div id="img-container"  className='relative group'>
                <i class="fa-solid fa-play text-3xl opacity-0 group-hover:opacity-100 text-[rgba(100,100,100,0.5)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                <img src={thumbnail} alt="pokedex-thumbnail" className='w-full  lg:h-[18vh]' />
            </div>
            
            <span className="font-stack-sans-notch text-white">{name}</span>
            <span className="text-[#8a8a8a] font-mono">{description}</span>

            <div id="tech-stack-used" className="text-[#8a8a8a] flex justify-between absolute bottom-2">
                <span className="text-xs">Made with&nbsp;</span>
                <div className="flex items-center">
                    <span className="text-xs">{framework}</span>

                    {framework=='react' && <i className="fa-brands fa-react"></i>}
                </div>
                
            </div>
            
        </div>
    )
}