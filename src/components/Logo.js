import {MdOutlineComputer} from "react-icons/md";
import {DiCode} from "react-icons/di";

function Logo() {
    return <>
        <span className="absolute scale-[.75] translate-y-[-.04em]"><DiCode/></span>
        <MdOutlineComputer/>
    </>
};

export default Logo;