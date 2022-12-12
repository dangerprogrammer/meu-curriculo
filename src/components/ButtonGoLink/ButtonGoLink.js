import {FaAngleDown} from 'react-icons/fa';

function ButtonGoLink({link}) {
    return <a href={link} className="text-[2rem] absolute left-1/2 bottom-8 flex justify-center items-center flex-col">
        <div className="absolute px-[6rem] py-[1rem] animate-bounce rounded-full">
            <FaAngleDown/>
        </div>
    </a>
};

export default ButtonGoLink;