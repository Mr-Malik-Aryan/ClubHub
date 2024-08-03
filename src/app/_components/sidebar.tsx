import React from "react";
import {
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    File,
    Home,
    LineChart,
    ListChecks,
    ListCollapse,
    ListFilter,
    MoreVertical,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
    ShoppingCart,
    Truck,
    Users2,
  } from "lucide-react"
  import { useState } from "react";
import { start } from "repl";
  export function SideBar(){
    const [isExpanded, setIsExpanded] = useState(false);

    return(
        <div className={`flex flex-col justify-start h-screen ${!isExpanded?'md:w-12  lg:w-16 items-center':' md:w-52 lg:w-56 items-end'}  transition-all duration-500 ease-in-out  bg-[#6d28d9]`}>
          
          <ChevronRight className={`mt-10 ${isExpanded? 'hidden' : 'ml-0'}`}onClick={()=>{setIsExpanded(!isExpanded)}} ></ChevronRight>
         <ChevronLeft className={`mt-10 ${isExpanded? 'mr-10' : 'hidden'}`}onClick={()=>{setIsExpanded(!isExpanded)}} ></ChevronLeft>
          <div className={`flex flex-col w-full  ${isExpanded?' p-4':'items-center'} transition-all ease-in-out duration-500 mt-10 justify-evenly h-3/5`}> 
       
         <Home/>
         <Settings/>
       <ShoppingCart/>
       <CreditCard></CreditCard>
       <PanelLeft></PanelLeft>
       <ListFilter></ListFilter>
       <ListChecks></ListChecks>
       <ListCollapse></ListCollapse>
        </div>
        </div>
    );

  }