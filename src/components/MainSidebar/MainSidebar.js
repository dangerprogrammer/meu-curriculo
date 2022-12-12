import MainTopic from "../MainTopic/MainTopic";

function MainSidebar({topicsList}) {
    return <main className="fixed left-0 h-screen min-w-[5rem] flex flex-col items-center justify-center gap-[1rem] z-[10]">
        <ul id="main-sidebar-list" className="relative flex flex-col gap-[1rem] mx-[1rem]">
            {topicsList && topicsList.map(({name, format, path}, ind) => <MainTopic key={ind} name={name} format={format} path={path}/>)}
            <span className="absolute h-full w-[1rem] flex items-center justify-center z-[-1]">
                <span className="h-[calc(100%-1rem)] border-l-[2px] social-media-dot"/>
            </span>
        </ul>
    </main>
};

export default MainSidebar;