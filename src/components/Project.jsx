export default function Project({name, description, thumbnail}){
    
    return(
        <div id="container" className="w-[20vw] h-[50vh] shrink-0 border-white hover:border flex flex-col items-center justify-around rounded-md pt-2 px-2">
            <img src={thumbnail} alt="pokedex-thumbnail" />
            <span className="font-stack-sans-notch text-white">{name}</span>
            <span className="text-[#8a8a8a]">{description}</span>
        </div>
    )
}