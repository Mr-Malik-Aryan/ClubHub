import React from "react";
import { UserProfile } from "./userProfile";
import { CardHeader } from "@/components/ui/card";
import SearchBar from "./search";
export const Navbar=()=>{
    return(
        <nav className=" fixed w-full z-40 flex items-center  bg-[#1c1917]  p-2 h-16  ">
<p className="text-xl font-bold "> ClubHub</p>

<div className="flex w-full justify-end mr-10">
<SearchBar />  
<UserProfile />
</div>
        </nav>
     );
}
    
