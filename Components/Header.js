import Image from "next/image";
import React from "react";
import {UserIcon, ShoppingCartIcon} from "@heroicons/react/solid";
import Userprofile from "./Userprofile";

const Header = () => {
  return (
    <div className="flex items-center justify-between ">
      <div className="mx-5">
        <Image src='https://cdn3.f-cdn.com/contestentries/46376/8762819/5288c7998f248_thumb900.jpg' alt="logo" width={150} height={100}/> 
      </div>
      <div className="mx-10 space-x-5 flex items-center">
        <ShoppingCartIcon className="h-8"/>
        <UserIcon className="h-8" fontSize={8}/>
      </div>
    </div>
  );
};

export default Header;


