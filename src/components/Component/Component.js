import classNames from "../../actions/classNames";

function Component({children, firstComponent, className, id}) {
    return <div id={id} className={classNames("w-[100vw]", firstComponent ? "flex h-[100vh] items-center flex-row" : undefined, className)}>{children}</div>
};

export default Component;