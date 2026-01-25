'use client';
import {  TextAlignStartIcon, Rocket } from "lucide-react";
import { NavLinks } from "@/constants/NavLinks";


const CategoriesBar = () => {
 
  return(
       <div className="flex justify-between px-10 py-4">
          <div className="flex items-center font-roboto  gap-2">
            <TextAlignStartIcon size={18} className="text-black font-medium" /> 
            <span className="text-black text-[14px] font-medium">SHOP BY CATEGORIES</span>
          </div>
          <nav className="font-roboto">
            <ul  className=" flex gap-9">
              {NavLinks.map((link) => (
                <li key={link.id} className="capitalize relative group text-[14px] tracking-[0.39998px]  font-medium text-grayLight">
                  {" "}
                  {link.title}
                </li>
              ))}
            </ul>
          </nav>
          <span className="flex gap-2 ">
            <Rocket  size={20} className=" font-medium text-grayDark "/>
            <span className="text-[14px] font-medium text-grayDark">
            Free International Delivery

            </span>
          </span>
        </div>
  );
};

export default CategoriesBar;