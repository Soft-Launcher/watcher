import React from 'react'

type Props = {
  title:string,
  onClick?:()=>void
}

const CustomButton = ({title,onClick}: Props) => {
  return (
    <button onClick={onClick}
    className='inline-block bg-primary text-secondary outline-none border-none font-body py-2 px-4 rounded-md transition-all duration-200 ease-in-out relative hover:scale-90'

    >
      {title}
    </button>
  )
}

export default CustomButton;