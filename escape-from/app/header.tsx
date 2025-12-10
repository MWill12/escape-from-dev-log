import Image from "next/image";
import Logo from "@/public/logo.svg";
interface HeaderProps {
  title: string;
}

const Header = ({title}: HeaderProps) => {
  return (
    <div className="flex justify-center text-3xl font-bold">
      <Image src = {Logo} alt = "Escape From Devlog" className="" />
      {title}
    </div>
  );
};

export default Header;