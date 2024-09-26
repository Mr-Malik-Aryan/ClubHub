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
import Feed from "./_components/feed";
import CreatePost from "./_components/createPost";
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

     
    
     }
    return (
    <div >
      <div   className="HomepageHeroGradient hidden lg:flex" 
  style={{ 
    width: '100%', 
    height: "20vh", 
    position: 'absolute', 
    top: '0px',
    background: 'linear-gradient(45deg, #a960ee 0%, #ff333d 25%, #90e0ff 50%, #ffcb57 100%)',
    transform: 'skewY(-5deg)',
    overflow: 'hidden'
  }} >
       <Image src={"/download.png"}  alt="="  layout="fill"  objectFit="cover"></Image>
       </div>
       <div   className="HomepageHeroGradient  lg:hidden" 
  style={{ 
    width: '100%', 
    height: "15vh", 
    position: 'absolute', 
    top: '0px',
    background: 'linear-gradient(45deg, #a960ee 0%, #ff333d 25%, #90e0ff 50%, #ffcb57 100%)',
    transform: 'skewY(-5deg)',
    overflow: 'hidden'
  }} >
       <Image src={"/download.png"}  alt="="  layout="fill"  objectFit="cover"></Image>
       </div>
        <Navbar />
        </div>
      
    );
  } else
    return (
      <>
        <LoginForm></LoginForm>
      </>
    );
}
