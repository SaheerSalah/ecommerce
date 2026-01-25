"use client";

import SearchBar from "./SearchBar";
import TopBar from "./TopBar";
import CategoriesBar from "./CategoriesBar";

export default function Navbar() {
  return (
    <>
      <nav className="hidden  lg:grid shadow-md">
        <TopBar />
        <SearchBar />
        <CategoriesBar />
      </nav>
      {/* <div className="lg:hidden">
        <MobileNavbar />
      </div> */}
    </>
  );
}
