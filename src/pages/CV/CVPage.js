import { BigHead } from '@bigheads/core';

import './CVPage.css';

import Header from "../../components/Header/Header";
import SideSocialMedia from "../../components/SideSocialMedia/SideSocialMedia";

import socialMedias from '../../actions/socialMedias';
import classNames from '../../actions/classNames';

function CVPage({themeToggler, theme}) {
    return <>
        <Header themeToggler={themeToggler} theme={theme} aditionalContent={<a className="relative group font-[Poppins] font-bold px-[1.5rem] py-[.6rem] rounded-[2rem] text-[#eee]" href="meu-cv.pdf" download="Patrick Vieira Léo - Currículo">
            <span className="relative z-[10]">Baixe em PDF!</span>
            <div className="absolute bg-[linear-gradient(25deg,#0af,#80f)] inset-0 rounded-[2rem] group-hover:blur-[.5rem] duration-300 pointer-events-none"/>
            <div className="absolute bg-[linear-gradient(25deg,#0af,#80f)] inset-0 rounded-[2rem] pointer-events-none"/>
            <div id="header-button" className="absolute bg-[#111] inset-[3px] rounded-[2rem] opacity-0 group-hover:opacity-80 pointer-events-none"/>
        </a>}/>
        <SideSocialMedia socialMedias={socialMedias}/>
        <div className="w-screen relative flex flex-col items-center">
            <div className="min-h-screen w-screen relative flex flex-col py-[6rem] px-[8rem]">
                <div className="flex flex-row">
                    <main className="h-[16rem] w-[16rem]">
                        <BigHead accessory="shades" body="chest" circleColor="blue" clothing="shirt" clothingColor="black" eyebrows="raised" eyes="happy" faceMask={false} faceMaskColor="blue" facialHair="none" graphic="react" hair="short" hairColor="brown" hat="none" hatColor="red" lashes lipColor="red" mask={false} mouth="grin" skinTone="light"/>
                    </main>
                    <div>
                        <Title className="text-[5em]">Patrick Vieira Léo</Title>
                        <LineBreak/>
                        <span className="mt-[.5rem] ml-[3vw] font-['Lobster_Two'] font-thin text-[1.8em] opacity-80">Programador front-end</span>
                    </div>
                </div>
            </div>
        </div>
    </>
};

function Title({children, className}) {
    return <h1 className={classNames(`text-[3rem] font-['Russo_One']`, className)}>{children}</h1>
};

function LineBreak({largeBreak}) {
    const line = <span className="w-full flex flex-row items-center opacity-50">
        <div className="h-[1rem] w-[1rem] body border-[calc(.1rem*1.5)] border-[currentColor] rotate-45"/>
        <span className="w-full h-[.1rem] bg-[currentColor]"/>
    </span>
    return <>
        {largeBreak ? <><br></br>{line}<br></br></> : line}
    </>
};

export default CVPage;