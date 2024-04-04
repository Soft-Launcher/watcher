type Props = {
  onclick: () => void;
  title: string;
};

const MenuItems = ({ onclick, title }: Props) => {
  return (
    <>
      <li
        onClick={() => onclick()}
        className="cursor-pointer text-white mx-4 font-body relative"
      >
        {title}
      </li>
    </>
  );
};

export default MenuItems;
