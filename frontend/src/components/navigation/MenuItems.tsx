import {cn} from '../../utilities/cn';

type Props = {
    onclick: () => void;
    title: string;
    active?: boolean;
};

const MenuItems = ({onclick, title, active = false}: Props) => {
    return (
        <>
            <li
                onClick={() => onclick()}
                className="group cursor-pointer text-white mx-4 font-body relative"
            >
                {title}
                <span className="absolute top-5 left-0 w-full h-1 bg-primary transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
            </li>
        </>
    );
};

export default MenuItems;
