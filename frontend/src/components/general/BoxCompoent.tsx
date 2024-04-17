import React from 'react';

type Props = {
    data: string;
};

const BoxCompoent = ({data}: Props) => {
    return (
        <div className="w-24 h-20 bg-white flex justify-center items-center rounded-lg shadow-2xl">
            <p className="font-body text-center text-primaryContainer font-bold">
                {data}
            </p>
        </div>
    );
};
export default BoxCompoent;
