function SocialMediaItem({name, icon}) {
    return <li className="flex flex-row-reverse items-center select-none">
        <div id="icon" className="peer/icon opacity-30 hover:opacity-100 relative h-[3rem] w-[3rem] rounded-[50%] flex justify-center items-center duration-150">
            <span className="absolute rounded-[50%] inset-0 curiosities-actived opacity-75 z-[1000]"/>
            <span className="relative h-[80%] w-[80%] flex justify-center items-center rounded-[50%] overflow-hidden z-[1000]">
                <img src={icon} alt={`${name} icon`} className="absolute left-0 top-0 h-full w-full object-cover"/>
            </span>
        </div>
        <div className="group
        opacity-0 pointer-events-none
        peer-hover/icon:opacity-100 peer-hover/icon:pointer-events-auto
        hover:opacity-100 hover:pointer-events-auto
        flex flex-row items-center duration-150">
            <h1 className="
            relative px-[.7rem] py-[.2rem] font-bold rounded-[1rem] curiosities-actived cursor-pointer
            left-[1rem]
            group-[#icon:hover~&]:left-0
            group-hover:left-0
            duration-150">{name}</h1>
            <span className="flex h-[2rem] w-[1rem] items-center">
                <span className="social-media-dot border-t-[2px] border-dotted w-full opacity-50 duration-150"/>
            </span>
        </div>
    </li>
};

export default SocialMediaItem;