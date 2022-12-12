import anime from 'animejs/lib/anime.es.js';
import { BigHead } from '@bigheads/core';

import './MainPage.css';

import ProfilePhoto from '../../assets/imgs/profile-photo.png';
import PythonFavicon from '../../assets/imgs/python-favicon.png';
import VbaFavicon from '../../assets/imgs/vba-favicon.png';
import VueJSFavicon from '../../assets/imgs/vue-js-favicon.png';
import AngularJSFavicon from '../../assets/imgs/angular-js-favicon.png';

import {FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaServer, FaReact, FaSass, FaDatabase, FaPenFancy} from "react-icons/fa";
import {MdOutlineSettingsEthernet, MdDesignServices} from "react-icons/md";
import {SiTailwindcss} from "react-icons/si";
import {TbBrandAdobe} from "react-icons/tb";

import Component from "../../components/Component/Component";
import Header from "../../components/Header/Header";
import AboutMeTopic from "../../components/AboutMeTopic/AboutMeTopic";
import ButtonGoLink from "../../components/ButtonGoLink/ButtonGoLink";
import LanguageComponent from "../../components/LanguageComponent/LanguageComponent";
import CuriositiesTopic from "../../components/CuriositiesTopic/CuriositiesTopic";
import CuriositiesTopicContent from "../../components/CuriositiesTopicContent/CuriositiesTopicContent";
import SideSocialMedia from "../../components/SideSocialMedia/SideSocialMedia";
import MainSidebar from "../../components/MainSidebar/MainSidebar";

import socialMedias from '../../actions/socialMedias';

function MainPage({themeToggler, theme}) {
    setTimeout(animeItemsLoader, 1);

    const curiositiesData = [
        {contentTitle: "Como foi feito", contentText: (<>
            Este site foi projetado utilizando como principais bibliotecas o ReactJS e TailwindCSS, desenvolvido pelo Visual Studio Code, este site até então levou aproximadamente 70 horas para ser construído.
            <br></br><br></br>
            Utilizando métodos como o Clean Code, para organização dos arquivos e das funções, buscando o menor consumo de processamento da máquina, além da melhor imersão possível no site.
        </>), id: "how-i-did"},
        {contentTitle: "Qual meu intúito com o site?", contentText: (<>
            Além de treinar minhas capacidades, tinha como objetivo apresentar um pouco mais sobre mim, minha história e outras curiosidades também.
        </>), id: "what-i-want"}
    ],
    topicsList = [
        {name: "Introdução", path: '/#introduction', format: 'circle'},
        {name: "Sobre mim", path: '/#about-me'},
        {name: "Habilidades", path: '/#skills'},
        {name: "Curiosidades", path: '/#website-curiosities', format: 'circle'},
    ];
    return <>
        <Header themeToggler={themeToggler} theme={theme}/>
        <SideSocialMedia socialMedias={socialMedias}/>
        <MainSidebar topicsList={topicsList}/>
        <Component firstComponent className="text-[2rem] px-[5vw] justify-between" id="introduction">
            <div className="relative text-[1.3em] left-[5rem]">
                <span className="block font-['Fredoka_One'] text-[transparent] bg-[linear-gradient(25deg,#0af,#80f)] bg-clip-text max-w-[45vw] font-[100]">Opa! Seja bem-vindo ao meu site, me chamo</span>
                <span className="flex mx-[5px] font-black text-[2em] font-[Righteous] whitespace-nowrap">Patrick V. Léo</span>
                <span className="block font-[Poppins] transparent-color text-[.7em] max-w-[45vw] font-[400]">Sou um programador front-end há mais de 3 anos!</span>
            </div>
            <span className="w-full flex flex-row justify-end mr-[4vw]">
                <div id="interact-blocks" className="grid grid-cols-[repeat(8,1fr)]"></div>
            </span>
            <div className="absolute left-0 h-screen w-screen pointer-events-none z-[-1]">
                <canvas className="z-[10]" id="background-canvas"></canvas>
                <div className="absolute z-[-1] left-0 top-0 min-h-[100vh] min-w-full">
                    <span className="purple-bg absolute top-0 left-0 h-full w-full"></span>
                    <span id="wave" className="absolute right-0 top-0 min-h-[99vh] w-[80vw] rounded-[100%_0%_35%_65%_/_0%_100%_0%_100%]"></span>
                    <span id="wave" className="absolute right-0 top-0 min-h-[95vh] w-[90vw] rounded-[100%_0%_35%_65%_/_0%_100%_0%_100%]"></span>
                    <span id="wave" className="absolute right-0 top-0 min-h-[95vh] w-[95vw] rounded-[100%_0%_35%_65%_/_0%_100%_0%_100%]"></span>
                </div>
            </div>
            <ButtonGoLink link="/#about-me"/>
        </Component>
        <Component className="purple-bg flex flex-row relative items-center justify-center rounded-[100%_0%_53%_47%/0%_76%_24%_100%] min-h-screen" id="about-me">
            <section className="relative mt-[5rem] mb-[8rem] bg-box w-[85vw] px-[4rem] py-[2rem] break-words rounded-[3rem] grid grid-cols-[auto_1fr] gap-[3rem] select-none shadow-[0_0_0_2px] before:content-[''] before:absolute before:inset-0 before:bg-[#0008] before:rounded-[3rem] before:blur-md before:translate-y-[1.5rem] before:scale-[1.02] before:z-[-1]">
                <div className="sticky top-0 pointer-events-none flex items-center py-[2rem] max-h-screen">
                    <span className="h-[20rem] w-[20rem]">
                        <BigHead accessory="shades" body="chest" circleColor="blue" clothing="shirt" clothingColor="black" eyebrows="raised" eyes="happy" faceMask={false} faceMaskColor="blue" facialHair="none" graphic="react" hair="short" hairColor="brown" hat="none" hatColor="red" lashes lipColor="red" mask mouth="grin" skinTone="light"/>
                    </span>
                </div>
                <div className="flex flex-col min-w-[12vw] gap-[.65em] default-color">
                    <header className="font-[Righteous] font-[900] text-[3.5rem] tracking-[.15rem]">Um pouco mais sobre <span className="uppercase text-[#50f] text-[1.2em]">mim!</span></header>
                    <span className="text-[1.15em] tracking-[.05rem] font-[Poppins]">
                        <p>Opa! Meu nome é Patrick, eu tenho 18 anos e estou em busca de uma oportunidade de emprego, estou interessado e tenho disponibilidade, sou um programador full-stack com muita força de vontade e foco para realizar qualquer tarefa.</p>
                        <br></br>
                        <p>Já trabalhei como jovem aprendiz entre 2019 e 2021, e estudo programação por conta própria (autodidata), sempre buscando aprimorar e aplicar meus conhecimentos fazendo projetos pessoais (alguns deles estão no meu GitHub). Aqui estão algumas das minhas habilidades pessoais.</p>
                        <br></br>
                    </span>
                    <div className="flex flex-col gap-[.5rem]">
                        <AboutMeTopic title="Comunicação em grupo">
                            Apesar de quando mais jovem ser muito introvertido, atualmente consigo facilmente estabelecer relações de amizade e/ou respeito com qualquer pessoa ao meu redor.
                        </AboutMeTopic>
                        <AboutMeTopic title="Inglês Intermediário">
                            Estou cursando Inglês na Wizard desde o começo de 2022, aprendendo constantemente a língua com objetivo a fluência.
                        </AboutMeTopic>
                        <AboutMeTopic title="Proatividade">
                            Sempre busco fazer mais do que apenas o que é pedido, tentando aprimorar o resultado da melhor forma possível.
                        </AboutMeTopic>
                        <AboutMeTopic title="Trabalho sob pressão">
                            Consigo lhidar muito bem com o trabalho sob pressão, mantendo a calma e conseguindo transformar pressão em progresso.
                        </AboutMeTopic>
                    </div>
                </div>
            </section>
            <ButtonGoLink link="/#skills"/>
        </Component>
        <Component className="flex flex-row relative items-center justify-center min-h-screen" id="skills">
            <section className="relative flex flex-col my-[5rem] gap-[2rem] items-center">
                <h1 className="text-[3rem] font-['Righteous']">Aqui abaixo estão algumas das minhas habilidades técnicas!</h1>
                <div id="skills-list" className="relative grid grid-cols-[repeat(6, 1fr)] gap-[1rem] max-w-[80vw]">
                    <LanguageComponent name="JavaScript" IconElem={() => <FaJs className="absolute left-0 top-0 h-full w-full object-cover text-[#fc0]"/>}
                    desc={<>
                    A primeira linguagem que aprendi, o JavaScript é sem dúvidas a língua que possuo maior domínio e facilidade em aprender e construir praticamente qualquer coisa, além de ser também uma linguagem extremamente importante e conhecida por ser muito versátil, sempre a utilizo em diversos projetos, com diversos recursos disponíveis na internet para suporte se necessário.
                    </>} typeSkill={<>Linguagem de programação</>} TypeLogo={({className}) => <MdOutlineSettingsEthernet className={className}/>}/>
                    <LanguageComponent name="HTML & CSS" IconElem={() => <>
                        <FaHtml5 className="absolute h-[75%] w-[75%] right-[-.1rem] bottom-[-.1rem] object-cover text-[#f30] z-[10]"/>
                        <FaCss3Alt className="absolute h-[65%] w-[65%] left-[-.1rem] top-[-.1rem] object-cover text-[#05f]"/>
                    </>} desc={<>
                    Um dos pontos mais essenciais para o front-end é sem dúvidas conhecer muito bem o HTML e CSS, esses que são os responsáveis por construir de fato toda a nossa aplicação, podendo resumir em tudo que está visível na nossa página, eu utilizo HTML e CSS há pelo menos 3 anos, tendo já bastante domínio tanto do CSS quanto do HTML, utilizando sempre ambos.
                    </>} typeSkill={<>Linguagem de texto</>} TypeLogo={({className}) => <MdOutlineSettingsEthernet className={className}/>}/>
                    <LanguageComponent name="NodeJS" IconElem={() => <FaNodeJs className="absolute left-0 top-0 h-full w-full object-cover text-[#0c0]"/>}
                    desc={<>
                    O NodeJS é uma ferramenta back-end que utiliza como base o JavaScript, mas no server-side, ou seja, estruturando todo o projeto para aí então ser acessível o nosso front-end, sendo uma ferramenta extremamente importante e também comum no dicionário de um programador, não só pela praticidade, mas também porque a maioria (se não todos) os editores de código já possuem uma versão do Node integrada.
                    </>} typeSkill={<>Ferramenta Back-end</>} TypeLogo={({className}) => <FaServer className={className}/>}/>
                    <LanguageComponent name="TailwindCSS & SASS" IconElem={() => <>
                        <SiTailwindcss className="absolute h-[75%] w-[75%] right-[-.1rem] bottom-[-.1rem] object-cover text-[#08f] z-[10]"/>
                        <FaSass className="absolute h-[65%] w-[65%] left-[-.1rem] top-[-.1rem] object-cover text-[#c38]"/>
                    </>} desc={<>
                    Ambos os recursos citados são extremamente úteis pra agilizar e compactar o CSS, além de possibilitar muito mais lógica incluída. O TailwindCSS é um dos meus mais novos aprendizados, que basicamente trabalha toda a estilização diretamente no próprio HTML, encurtando muito o tamanho e agilizando na estilização. E o SASS/SCSS é basicamente a aplicação de recursos de lógica no CSS, podendo usar funçoes (mixins), listas ordenadas, variáveis diferenciadas entre diversos outras possibilidades que o CSS comum não tem.
                    </>} typeSkill={<>Recursos de estilização</>} TypeLogo={({className}) => <MdOutlineSettingsEthernet className={className}/>}/>
                    <LanguageComponent name="Python" IconElem={({alt}) => <img src={PythonFavicon} alt={alt} className="absolute left-0 top-0 h-full w-full object-cover text-[#50f]"/>}
                    desc={<>
                    O python também é outro gigante no mercado, sendo uma das maiores e mais utilizadas linguagens no mundo, e assim como o JS, sendo extremamente versátil e eficaz pra construir todo tipo de aplicação, desde um jogo da web até um sistema de login por exemplo.
                    </>} typeSkill={<>Linguagem de programação</>} TypeLogo={({className}) => <MdOutlineSettingsEthernet className={className}/>}/>
                    <LanguageComponent name="Pacote Office & VBA" IconElem={({alt}) => <img src={VbaFavicon} alt={alt} className="absolute left-0 top-0 h-full w-full object-cover text-[#50f]"/>}
                    desc={<>
                    Um dos recursos extremamente utilizados em empresas tradicionais, o pacote office está sempre inserido de alguma forma em seu planejamento, seja em uma planilha de dados, ou em documentos do Word, então por esse motivo busquei aprender o VBA, e utilizar da melhor forma as ferramentas do pacote office, lhidando então com VBA, e qualquer programa do office.
                    </>} typeSkill={<>Recursos do Microsoft Office</>} TypeLogo={({className}) => <FaDatabase className={className}/>}/>
                    <LanguageComponent name="ReactJS, VueJS, AngularJS, Electron, VanillaJS & jQuery" IconElem={({alt}) => <>
                        <FaReact className="absolute h-[70%] w-[70%] right-[-.3rem] bottom-[-.3rem] object-cover text-[#0cf] z-[100] drop-shadow-lg"/>
                        <img src={VueJSFavicon} alt={alt} className="absolute h-[70%] w-[70%] left-[-.3rem] bottom-[-.3rem] object-cover text-[#50f] z-[10] drop-shadow-lg"/>
                        <img src={AngularJSFavicon} alt={alt} className="absolute h-[70%] w-[70%] left-[50%] top-[-.3rem] translate-x-[-50%] object-cover text-[#50f] drop-shadow-lg"/>
                    </>} desc={<>
                    Aqui está uma enorme lista de recursos do JavaScript, cada um com seu próprio contexto, mas vim resumí-los da melhor forma possível, estes são bibliotecas do JS, que servem pra adicionar funcionalidades novas, tendo cada um suas próprias características, como no ReactJS por exemplo, que é um dos mais conhecidos aqui, utilizado para "misturar" o JS com o HTML tradicional, criando então os arquivos JSX, onde você pode manipular elementos de forma estratégica e versátil em qualquer aplicação.
                    </>} typeSkill={<>Linguagens de programação</>} TypeLogo={({className}) => <MdOutlineSettingsEthernet className={className}/>} gridLarge/>
                    <LanguageComponent name="UX/UI Design & Pacote Adobe" IconElem={() => <>
                        <MdDesignServices className="absolute h-[80%] w-[80%] right-[-.3rem] bottom-[-.3rem] object-cover text-[#50f] z-[10] drop-shadow-[0_0_.2rem_#000]"/>
                        <TbBrandAdobe className="absolute h-[80%] w-[80%] left-[-.3rem] top-[-.3rem] object-cover text-[#50f] drop-shadow-[0_0_.2rem_#000]"/>
                    </>} desc={<>
                    E por fim os recursos de design, como a UX (User Experience) e UI (User Interface), tais que fazem a completa diferença na sua interação com um site, e na imersão daquele respectivo conteúdo, além disso fiz também um curso que tinha um módulo específico para o pacote Adobe, ensinando utilizar desde o Adobe Photoshop até o Adobe XD.
                    </>} typeSkill={<>Recursos de design</>} TypeLogo={({className}) => <FaPenFancy className={className}/>} gridLarge/>
                </div>
                <span className="absolute inset-x-[2vw] h-[40rem] top-[50%] translate-y-[-50%] pointer-events-none z-[-1]">
                    <span className="absolute inset-0 purple-bg rounded-[25%75%41%59%/30%30%70%70%] opacity-75"></span>
                    <span className="absolute inset-0 purple-bg rounded-[71%29%78%22%/80%86%14%20%] scale-[.8] opacity-50"></span>
                    <span className="absolute inset-0 purple-bg rounded-[88%12%44%56%/27%65%35%73%] scale-[.6] opacity-75"></span>
                </span>
            </section>
            <ButtonGoLink link="/#website-curiosities"/>
        </Component>
        <Component className="relative flex flex-col justify-center items-center min-h-screen" id="website-curiosities">
            <h1 className="text-[3rem] font-['Righteous'] text-center mb-[5rem]">Aqui estão mais curiosidades sobre o site!</h1>
            <section className="relative flex flex-col max-w-[50vw] mb-[4rem] gap-[4rem]">
                <header className="relative flex gap-[.5rem] items-center select-none">
                    {curiositiesData.map(({contentTitle, id}, ind) => <CuriositiesTopic key={ind} content={contentTitle} actived={!ind} id={id}/>)}
                </header>
                <main className="relative scroll-smooth flex w-full overflow-x-auto snap-x snap-mandatory" id="main-curiosities">
                    {curiositiesData.map(({contentText, id}, ind) => <CuriositiesTopicContent key={ind} content={contentText} id={id}/>)}
                </main>
            </section>
        </Component>
    </>
};

// let firstLoad;
function animeItemsLoader() {
    // if (firstLoad) return;
    // if (!firstLoad) firstLoad = true;
    const interactBlocks = document.querySelector('#interact-blocks'), blocksChildrenArr = [];
    let bH = document.body.offsetHeight, bW = document.body.offsetWidth, interactBlocksSize = Math.min(bH * .65, bW * .65 * (interactBlocks.parentElement.offsetWidth / bW), 500);
    interactBlocks.style.height = `${interactBlocksSize}px`;
    interactBlocks.style.width = `${interactBlocksSize}px`;
    while (blocksChildrenArr.length < 8 ** 2) {
        const blockChildren = document.createElement('div');
        blockChildren.id = 'block-children';
        blockChildren.className = "h-full w-full";
        blockChildren.style.scale = '.75';
        blockChildren.style.borderRadius = '10%';
        blocksChildrenArr.push(blockChildren);
    };
    !interactBlocks.children.length && interactBlocks.append(...blocksChildrenArr);

    const header = document.querySelector('#header');

    window.onscroll = windowScroll;

    windowScroll();
    function windowScroll() {
        const introduction = document.querySelector('#introduction'),
            aboutMe = document.querySelector('#about-me'),
            skills = document.querySelector('#skills'),
            websiteCuriosities = document.querySelector('#website-curiosities'),
            pages = [introduction, aboutMe, skills, websiteCuriosities],
            pagesOnScreen = pages.map(page => getViewOnScreen(page)),
            pageOnScreen = Math.max(...pagesOnScreen),
            menuPages = [...document.querySelector('#main-sidebar-list').children];
        header.classList.toggle('scrolled', window.scrollY > 0);
        let findedScreen = introduction;
        pages.forEach((page, ind) => {
            const pageScreen = pagesOnScreen[ind];

            if (pageScreen === pageOnScreen) findedScreen = page;
        });
        let findedMenuPage = menuPages.find(menuPage => menuPage.href.slice(window.location.origin.length + 2) === findedScreen.id);
        menuPages.forEach(menuPage => menuPage.classList[menuPage.href === findedMenuPage.href ? 'add' : 'remove']('active'));
    };

    function getViewOnScreen({offsetTop, offsetHeight}) {
        const elemBottom = offsetTop + offsetHeight,
            pageBottom = window.scrollY + window.innerHeight,
            fullView = Math.max(Math.min(elemBottom, pageBottom) - Math.max(offsetTop, window.scrollY), 0), percentElem = fullView / offsetHeight;
        
        return percentElem;
    };

    window.onresize = () => {
        bH = document.body.offsetHeight;
        bW = document.body.offsetWidth;
        interactBlocksSize = Math.min(bH * .65, bW * .65 * (interactBlocks.parentElement.offsetWidth / bW), 500);
        interactBlocks.style.height = `${interactBlocksSize}px`;
        interactBlocks.style.width = `${interactBlocksSize}px`;
    };

    const animateBlocks = anime.timeline({
        targets: blocksChildrenArr,
        easing: 'easeInOutExpo',
        loop: true,
        delay: anime.stagger(50, {grid: [8, 8], from: 'center'})
    });

    animateBlocks.add({
        rotateZ: 180,
        translateX: anime.stagger(-20, {grid: [8, 8], from: 'center', axis: 'x'}),
        translateY: anime.stagger(-20, {grid: [8, 8], from: 'center', axis: 'y'})
    })
    .add({
        borderRadius: 50
    })
    .add({
        scale: .2,
        opacity: .2
    })
    .add({
        rotateZ: 180,
        translateX: anime.stagger(0, {grid: [8, 8], from: 'center', axis: 'x'}),
        translateY: anime.stagger(0, {grid: [8, 8], from: 'center', axis: 'y'}),
        opacity: 1
    })
    .add({
        scale: 1,
        borderRadius: 10
    })
    .add({
        rotateZ: -90,
    });

    const canvas = document.querySelector('#background-canvas'),
        canvas2d = canvas.getContext('2d'), polygons = [];

    let firstRender = !0;
    function updateCanvas() {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        firstRender ? generatePolygons() : rotatePolygons();
        
        requestAnimationFrame(updateCanvas);
        firstRender = !1;
    };

    requestAnimationFrame(updateCanvas);

    function rotatePolygons() {
        canvas2d.lineWidth = 8;
        canvas2d.globalAlpha = window.theme === 'dark' ? 1 : .5;
        polygons.forEach(({xCenter, yCenter, numberSides, polygonSize, fullyColor, randomBW, randomBH, rotationSpeed, rotate, rotationDir}, ind) => {
            canvas2d.save();
            polygons[ind].rotate = rotate + rotationSpeed || rotationSpeed;
            rotate = polygons[ind].rotate;
            xCenter = xCenter > 30 ? (80/100*bW) + randomBW * (15/100*bW) : (5/100*bW) + randomBW * (20/100*bW);xCenter = Math.min(bW - polygonSize, Math.max(polygonSize, xCenter));
            yCenter = yCenter > 18 ? (80/100*bH) + randomBH * (15/100*bH) : (5/100*bH) + randomBH * (20/100*bH);yCenter = Math.min(bH - polygonSize, Math.max(polygonSize, yCenter));

            canvas2d.beginPath();
            canvas2d.moveTo(
                xCenter + polygonSize * Math.cos(2 * Math.PI * (0 + rotate * rotationDir)),
                yCenter + polygonSize * Math.sin(2 * Math.PI * (0 + rotate * rotationDir))
            );
    
            canvas2d.strokeStyle = fullyColor;
    
            for (let c = 1; c <= numberSides; c++) canvas2d.lineTo(
                xCenter + polygonSize * Math.cos(2 * Math.PI * (c / numberSides + rotate * rotationDir)),
                yCenter + polygonSize * Math.sin(2 * Math.PI * (c / numberSides + rotate * rotationDir))
            );
    
    
            canvas2d.closePath();
            canvas2d.stroke();
            canvas2d.restore();
        });
    };

    function generatePolygons() {
        polygons.splice(0, polygons.length);

        for (let c = 0; c < 8; c++) generateRandomPolygon();
    };

    function generateRandomPolygon() {
        const randomColor = () => Math.round(Math.random() * 255);
        let r = randomColor(), g = randomColor(), b = randomColor();
        while ((r + g + b) < 400 || (r + g + b) > 500) {
            r = randomColor();
            g = randomColor();
            b = randomColor();
        };
        r = r.toString(16);r.length < 2 && (r = `0${r}`);
        g = g.toString(16);g.length < 2 && (g = `0${g}`);
        b = b.toString(16);b.length < 2 && (b = `0${b}`);
        const fullyColor = `#${r + g + b}`, polygonSize = 40 + Math.random() * 60, numberSides = 3 + Math.round(Math.random() * 3);
        let xCenter = Math.random() * 40, yCenter = Math.random() * 40, randomBW = Math.random(), randomBH = Math.random(), rotationSpeed = 1 / (polygonSize * 5), rotationDir = Math.random() > .5 ? 1 : -1;

        polygons.push({xCenter, yCenter, numberSides, polygonSize, fullyColor, randomBW, randomBH, rotationSpeed, speed: 0, rotationDir});
    };
};

export default MainPage;