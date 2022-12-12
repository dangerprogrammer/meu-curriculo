import classNames from "../../actions/classNames";

function CuriositiesTopicContent({className, content, id}) {
    return <section className={classNames("shrink-0 w-full snap-center", className)} id={id}>{content}</section>
};

export default CuriositiesTopicContent;