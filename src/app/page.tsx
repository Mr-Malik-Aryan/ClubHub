"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession, getSession } from "next-auth/react";
import Image from "next/image";
import { UserInput } from "../../models/userschema";
import { signOut } from "next-auth/react";
import { signIn } from "next-auth/react";
import { getUserSession } from "@/lib/sessions";
import "./globals.css";
import logo from "../../public/CrossConnect.png";
import { FaGoogle } from "react-icons/fa";
import LoginForm from "./(auth)/login/page";
import { Button } from "@/components/ui/button";
import { Navbar } from "./_components/navbar";
import { SideBar } from "./_components/sidebar";
import FriendCard from "./_components/ChatCard";
export default function Home() {
  const { data: session, status } = useSession();
  async function logMeIn(UserData:UserInput) {
    try {
     
        const res =await fetch("/api/adduser",{
          method:'POST',
          headers:{
          'Content-Type':'application/json',

          },
          body:JSON.stringify(UserData)


        })
        if(res.status == 400)
        {
          throw new Error('Failed to add user')
        }
        const result  = await res.json();
        //console.log(result.message);


      }
     

    
    catch(error){
      console.error('Error adding user:', error);
    }
  }
  if (status == "authenticated") {
    const dp = session.user?.image;
    //console.log("initiated");
    if (session.user?.name && session.user.email) {
   // console.log("session exists")
      const UserData: UserInput = {
        id: "hi",
        name: session.user?.name,
        email: session.user?.email,
        password: "oauthuser",
        exists: true,
      };
       logMeIn(UserData);
       //console.log(UserData)
     
    
     }
    return (
      <>
        <Navbar />
       
        <div className= "fixed z-20 h-full hidden md:flex  w-4/12">
          <SideBar />
        </div>
        <div className="flex ml-20">
        <div className="mt-10 w-2/12"> 
        
          </div>
        </div>
      </>
    );
  } else
    return (
      <>
        <LoginForm></LoginForm>
      </>
    );
}
