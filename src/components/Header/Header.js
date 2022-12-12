import acessiblePages from "../../actions/acessiblePages";
import Pages from "./Pages";
import Logo from "../Logo";
import {FaSun, FaMoon} from 'react-icons/fa';
import { Link } from "react-router-dom";

function Header({themeToggler, theme, aditionalContent}) {
    window.themeToggler = themeToggler;
    window.theme = theme;

    setTimeout(() => preloadThemeToggler(theme), 1);
    return <div id="header" className="fixed w-full flex flex-row justify-between items-center gap-[2vw] px-[4vw] select-none z-[100] min-h-[4rem]">
        <Link to="/" className="flex flex-row items-center gap-3 px-[1rem] py-1 font-['Varela_Round'] rounded-lg cursor-pointer outline-0 z-[10]">
            <span className="text-[3rem]"><Logo/></span>
            {/* <span className="font-black uppercase tracking-widest text-[1rem] relative translate-y-[.1em]">Danger</span> */}
        </Link>
        <div className="absolute flex grow items-center justify-center inset-0 flex-wrap">
            <Pages listPages={acessiblePages}/>
        </div>
        <div className="flex grow justify-center inset-0 flex-wrap pointer-events-none opacity-0">
            <Pages listPages={acessiblePages}/>
        </div>
        <div className="flex flex-row gap-[2vw] items-center z-[10]">
            <div id="themeToggler" className="relative cursor-pointer flex items-center h-[2rem] w-[4rem] rounded-[1rem]">
                <button id="ball" className="absolute h-[2rem] w-[2rem] bg-[blue] rounded-[1rem] flex flex-row items-center overflow-hidden scale-[1.25]">
                    <span id="sun" className="flex items-center justify-center shrink-0 h-full w-full text-[yellow]"><FaSun/></span>
                    <span id="moon" className="flex items-center justify-center shrink-0 h-full w-full text-[#88f]"><FaMoon/></span>
                </button>
            </div>
            {aditionalContent}
        </div>
    </div>
};

function preloadThemeToggler(theme) {
    const themeTogglerDiv = document.querySelector('#themeToggler');
    themeTogglerDiv.classList.add(theme);
    themeTogglerDiv.onclick = () => window.themeToggler(themeTogglerDiv);
};

export default Header;