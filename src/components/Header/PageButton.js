import {Link} from 'react-router-dom';
import classNames from '../../actions/classNames';

function PageButton({page}) {
    const {toLink, name} = page,
        isThisPage = window.location.pathname === toLink;
    return <Link to={toLink} className={classNames("relative flex items-center justify-center px-[1.5rem] py-[.3rem] rounded-[.75rem] font-bold text-[1.25em] tracking-wider before:content-[''] before:absolute before:left-1/2 before:translate-x-[-50%] before:top-0 before:h-full before:bg-[#50f] before:rounded-[.5em] before:translate-y-[calc(-100%-.25rem)] hover:before:translate-y-0 before:duration-150", isThisPage ? "before:w-full" : "before:w-1/2 before:opacity-10 hover:before:w-full")} id={isThisPage ? "page-owner" : "page-button"}>
        <span className="relative z-[1]">{name}</span>
    </Link>
};

export default PageButton;