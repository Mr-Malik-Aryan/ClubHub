import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button"
import { FaVideo } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { IoDocument } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";


const CreatePost=()=>{
 
    const { data: session, status } = useSession();
  return (



    <div className="flex w-full p-6">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={session?.user?.image||session?.user?.name?.slice(0,3)} alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="w-full">
            <div className="font-medium">{session?.user?.name}</div>
            <div className="text-muted-foreground text-sm">@johndoe</div>
          </div>
        </div>
        <Textarea placeholder="What's on your mind?" className="resize-none w-full mt-4"  rows={8} />
        <div className="flex w-full justify-evenly">
            <Button variant="ghost" className="hover:bg-[#6d28d9]"><FaImage className="h-6 w-6" /></Button>
            <Button variant="ghost" className="hover:bg-[#6d28d9]"><IoDocument className="h-6 w-6"/></Button>
            <Button variant="ghost" className="hover:bg-[#6d28d9]"><FaVideo  className="h-6 w-6"/></Button>
            <Button variant="ghost" className="hover:bg-[#6d28d9]"><FaMapLocationDot  className="h-6 w-6"/></Button>
            <Button variant="ghost" className="hover:bg-[#6d28d9]"><MdEmojiEmotions  className="h-6 w-6" /></Button>

        </div>
      </div>
      </div>
    
      )
      }

 
export default CreatePost;