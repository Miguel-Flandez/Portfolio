export default function Project({name, description, thumbnail}){
    
    return(
        <div id="container" className="text-sm w-[20vw] h-[50vh] shrink-0 hover:bg-[rgba(100,100,100,0.2)] hover:-translate-y-1 transition-all  border border-transparent flex flex-col items-center gap-[1vw] rounded-md pt-[1vw] px-[1vw] cursor-pointer">
            <img src={thumbnail} alt="pokedex-thumbnail" />
            <span className="font-stack-sans-notch text-white">{name}</span>
            <span className="text-[#8a8a8a] font-mono">{description}</span>
            
        </div>
    )
}