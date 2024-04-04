type Props = {
  onclick: () => void;
  title: string;
};

const MenuItems = ({ onclick, title }: Props) => {
  return (
    <>
      <li onClick={() => onclick()} className="bg-cyan-400 cursor-pointer">
        {title}
      </li>
    </>
  );
};

export default MenuItems;
