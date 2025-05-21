import { useState } from "react";
import { Button, Modal } from "antd";
import { Link } from "react-router";
import { Sling as Hamburger } from "hamburger-react";
import logo from "../../assets/logo.png";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-between items-center px-6 py-2 border-b border-gray-300 relative">
   

      {/* Logo */}
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4">
        <Link to='/login'>Login / Register</Link>
        <Button type="primary">SELL</Button>
      </div>

      {/* Hamburger Menu Icon (Mobile) */}
      <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} />
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-300 p-4 flex flex-col items-start md:hidden z-10 shadow-md">
          <Button type="primary" block onClick={() => setOpen(false)}>
            SELL
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navigation;
