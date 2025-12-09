interface HeaderProps {
  title: string;
}

const Header = ({title}: HeaderProps) => {
  return (
    <div className="flex justify-center text-3xl font-bold">
      {title}
    </div>
  );
};

export default Header;