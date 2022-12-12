import classNames from "../../actions/classNames";

function CuriositiesTopic({className, content, actived, id}) {
    setTimeout(() => loadClick(id), 1);

    return <li className={classNames("flex items-center justify-center list-none cursor-pointer px-[1.2rem] py-[.3rem] font-bold rounded-[1rem] text-[1.5rem]", actived ? "curiosities-actived" : "curiosities-disabled", className)} id={id}>{content}</li>
};

function loadClick(id) {
    const li = document.querySelector(`li[id='${id}']`), header = li.parentElement, lis = [...header.children], topicContent = document.querySelector(`section[id='${id}']`), main = topicContent.parentElement;
    li.onclick = () => {
        lis.forEach(liChild => {
            liChild.classList.remove("curiosities-actived");
            liChild.classList.add("curiosities-disabled");
        });
        li.classList.remove("curiosities-disabled");
        li.classList.add("curiosities-actived");
        main.scrollTo(topicContent.offsetLeft, 0);
        console.log(main, topicContent.offsetLeft);
    };
};

export default CuriositiesTopic;