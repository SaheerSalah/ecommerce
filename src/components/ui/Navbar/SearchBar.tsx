import { useState } from "react";
import { Heart, ShoppingCart, LucideSearch } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function SearchBar({
  placeholder = "Search for products...",
  className = "",
}) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا بعدين رح نضيف logic البحث أو رابط للصفحة
    console.log("Search query:", query);
  };

  return (
    <div className="px-10 py-2 md:py-3 flex justify-between items-center border-b border-gray-200">
      <div>
        <Logo />
      </div>
      <div className="w-[515px]  mx-10">
        <form
          onSubmit={handleSubmit}
          className="w-full h-13 rounded-md bg-[#e5e5e5] dark:bg-gray-700 flex items-center px-3"
        >
          <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-900 dark:text-white placeholder-grayDark dark:placeholder-gray-300 py-2"
          />
          <button type="submit" className="ml-2">
            <LucideSearch className="w-5 h-5 text-grayDark dark:text-gray-300" />
          </button>
        </form>
      </div>
      <div className="flex  gap-4 py-2 lg:py-4 ">
        <div className="flex gap-3  text-[15px] leading-[22px] text-grayDark font-medium">
          <Link href="/login" className="">
            Login
          </Link>
          <span>|</span>
          <Link href="/register" className="">
            Register
          </Link>
        </div>
        <div className="text-grayIcon leading-9 flex gap-5 font-normal text-[24px]">
          <Heart />
          <ShoppingCart />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
