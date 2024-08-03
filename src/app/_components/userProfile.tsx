import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { signOut, useSession } from "next-auth/react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { User } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import React from "react";
import { Separator } from "@/components/ui/separator"

const SeparatorDemo=()=> {
  const {data : session} =useSession();
 
  return (
    <div>
      <div className="flex flex-col items-center  space-y-1">
      <AvatarImage className="w-16 h-16 mt-4 rounded-full" src={session?.user?.image||"https://img.freepik.com/free-vector/digital-technology-background-with-abstract-wave-border_53876-117508.jpg"}/>
       <div className="flex  flex-col items-center p-4" >
        <h4 className="text-sm font-medium leading-none">{session?.user?.name}</h4>
        <p className="text-sm text-muted-foreground">
{session?.user?.email}        </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 ml-3 items-center space-x-4 text-sm">
        <Button variant={"lite"}>Edit</Button>
        <Separator orientation="vertical" />
        <Button variant={"lite"}>Clubs</Button>
        <Separator orientation="vertical" />
        <Button variant={"lite"}>Source</Button>
      </div>
    </div>
  )
}

export const UserProfile=()=>{
  const { setTheme } = useTheme()
        const {data : session} =useSession();
      
    
        return(
        <Avatar>
          
          <DropdownMenu  >
      <DropdownMenuTrigger asChild>
       
         <AvatarImage src={session?.user?.image||"https://img.freepik.com/free-vector/digital-technology-background-with-abstract-wave-border_53876-117508.jpg"}/>
        
      </DropdownMenuTrigger>
      <DropdownMenuContent  className="mr-12 w-auto flex flex-col justify-center">
        <SeparatorDemo></SeparatorDemo>
    
    <Button variant='destructive' className= 'mt-4' onClick={()=>signOut()}>Logout</Button>
  </DropdownMenuContent>
    </DropdownMenu>
        
    <AvatarFallback>{session?.user?.name?.slice(0,1)}</AvatarFallback>
   
          </Avatar>
     
          
        );
}