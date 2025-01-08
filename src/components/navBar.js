import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-gray-600 p-4 flex justify-between items-center text-white">
      <div className="text-lg font-bold">Loja do Marchioro</div>
      <ul className="flex space-x-4 font-semibold">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Produtos</li>
        <li className="hover:underline cursor-pointer">Sobre</li>
        <li className="hover:text-white cursor-pointer">Contato</li>
      </ul>
    </nav>
  );
};

export default NavBar;
