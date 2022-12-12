import classNames from "../../actions/classNames";

function MainTopic({name, format, path}) {
    return <a href={path} className="group/main flex flex-row gap-[.8rem] items-center">
        <span className={classNames("block h-[1rem] w-[1rem] bg-[#50f] rotate-45 social-media-dot main-topic-format ring-2 ring-offset-4 ring-offset-[#000] scale-[.75]", format === 'circle' ? "rounded-full" : null)}/>
        <h1 className="duration-150 main-topic-name font-bold">{name}</h1>
    </a>
};

export default MainTopic;