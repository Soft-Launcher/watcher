import React from 'react';

type Props = {
    title: string;
    onClick?: () => void;
    type?: 'submit' | 'reset' | 'button' | undefined;
};

const CustomButton = ({title, onClick, type}: Props) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="cursor-pointer inline-block bg-primary text-secondary outline-none border-none font-body py-2 px-4 rounded-md transition-all duration-200 ease-in-out relative hover:scale-90"
        >
            {title}
        </button>
    );
};

export default CustomButton;
