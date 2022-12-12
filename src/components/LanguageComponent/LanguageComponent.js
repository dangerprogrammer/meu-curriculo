function LanguageComponent({name, IconElem, desc, typeSkill, TypeLogo, gridLarge}) {
    return <div id={gridLarge ? "grid-large" : null} className="flex flex-col rounded-[2rem] shadow-[0_0_0_2px] p-[1rem] gap-[1rem] backdrop-blur bg-box language-component">
        <header className="flex flex-row gap-[1rem] items-center pb-[.5rem] border-b-[2px] transparent-b-color">
            <div className="flex shrink-0 items-center justify-center h-[4rem] w-[4rem] bg-[#111] rounded-[.75rem] pointer-events-none select-none">
                <span className="flex relative h-[3rem] w-[3rem] items-center justify-center">
                    {IconElem && <IconElem alt={name + ' icon'}/>}
                </span>
                </div>
            <div className="flex flex-col font-['Poppins']">
                <span className="transparent-color text-[.9em] flex flex-row gap-[.5rem] items-center">
                    {TypeLogo && <TypeLogo className="text-[1.4em] default-color"/>}
                    {typeSkill}
                </span>
                <h1 className="font-black text-[1.6em] tracking-[1px] default-color">{name}</h1>
            </div>
        </header>
        <p className="mx-[1rem] default-color text-[.85em]">{desc}</p>
    </div>
};

export default LanguageComponent;