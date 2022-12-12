import Header from "../../components/Header/Header";

function ProjectsPage({themeToggler, theme}) {
    return <>
        <Header themeToggler={themeToggler} theme={theme}/>
        <span>Projects</span>
    </>
};

export default ProjectsPage;