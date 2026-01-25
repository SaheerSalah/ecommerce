// import { useState } from "react";
import Link from "next/link";
// import { LucideSearch } from "lucide-react"; 

export default function TopBar() {
  return (
    <div className="px-10 py-2 text-grayDark text-[12px] leading-[25px] font-medium  flex justify-between items-center border-b border-gray-200">
        <div>Get up to 50% off new season styles, limited time only</div>
        <div className=" capitalize flex gap-6 text-[13px] leading-5 font-medium">
          <Link href="/" className="">
            help center
          </Link>
          <Link href="/" className="">
            order Tracking
          </Link>
        </div>
      </div>
  );
}
