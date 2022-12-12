import {FaAngleDown} from 'react-icons/fa';

function AboutMeTopic({title, children}) {
    setTimeout(() => loadClicks(title), 1);

    return <section className="group flex flex-col w-full" data-title={title}>
        <main className="grid grid-cols-[1fr_auto] items-center hover:bg-[#50f2] pl-[.75rem] pt-[.3rem] cursor-pointer rounded-[.5rem] duration-200">
            <div className="flex flex-col">
                <div className="grid grid-cols-[auto_1fr_auto] w-full my-[2px] items-center">
                    <span className="block h-[1rem] w-[1rem] border-[#50f] border-[.2rem] rounded-[50%]"></span>
                    <span className="h-[.2rem] bg-[#50f]"></span>
                    <span className="grid items-center justify-center px-[.5rem] py-[.2rem] pl-[.75rem] border-[.2rem] border-[transparent] border-l-[#50f] rounded-[1rem]">
                        <FaAngleDown className="relative group-[&.hide]:rotate-[-90deg] duration-200"/>
                    </span>
                </div>
                <h1 className="relative ml-[1.2rem] text-[1.4em] text-[#50f] uppercase font-[900] font-[Poppins] tracking-[.05rem] translate-y-[-5px] pointer-events-none">{title}</h1>
            </div>
        </main>
        <footer className="mx-[2.8rem] group-[&.hide]:hidden text-[1.1em]">{children}</footer>
    </section>
};

function loadClicks(title) {
    const section = document.querySelector(`section[data-title='${title}']`), main = document.querySelector(`section[data-title='${title}'] main`);
    main.onclick = () => section.classList.toggle('hide');
};

export default AboutMeTopic;