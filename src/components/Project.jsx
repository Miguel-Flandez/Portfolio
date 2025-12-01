export default function Project({name, description, thumbnail, framework}){
    
    
    return(
        <div id="container" className="text-sm w-[20vw] h-[50vh] shrink-0 hover:bg-[rgba(100,100,100,0.2)] hover:-translate-y-1 transition-all  border border-transparent flex flex-col items-center gap-[1vw] rounded-md pt-[1vw] px-[1vw] cursor-pointer relative">
            <div id="img-container"  className='relative group'>
                <i class="fa-solid fa-play text-3xl opacity-0 group-hover:opacity-100 text-[rgba(100,100,100,0.5)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
                <img src={thumbnail} alt="pokedex-thumbnail" className='hover:z-0 z-20' />
            </div>
            
            <span className="font-stack-sans-notch text-white">{name}</span>
            <span className="text-[#8a8a8a] font-mono">{description}</span>

            <div id="tech-stack-used" className="text-[#8a8a8a] flex justify-between absolute bottom-1">
                <span className="text-xs">Made with&nbsp;</span>
                <div className="flex items-center">
                    <span className="text-xs">{framework}</span>

                    {framework=='react' && <i className="fa-brands fa-react"></i>}
                </div>
                
            </div>
            
        </div>
    )
}