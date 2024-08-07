import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import InfiniteScroll from 'react-infinite-scroll-component';
const  Component=()=> {
    const cards =[0,1,2,3,4,5];
    const  fetchData=()=>{
        console.log("I am supposed to fetch new data")
    }
  return (
    <div >
        <InfiniteScroll
      
  dataLength={1} //This is important field to render the next data
  next={fetchData}
  hasMore={true}
  loader={<h4></h4>}
  endMessage={
    <p style={{ textAlign: 'center',width:'full' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  // below props only if you need pull down functionality
//   refreshFunction={this.refresh}
//   pullDownToRefresh
//   pullDownToRefreshThreshold={50}
//   pullDownToRefreshContent={
//     <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
//   }
//   releaseToRefreshContent={
//     <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
//   }
>
    {
       cards.map(()=>{
        return(
<Card className="w-full max-w-full  justify-center p-4 border-none ">
    <Separator className="my-4 bg-white opacity-30" />
      <CardHeader className="flex items-center gap-4 p-4 ">
        
      <div className="flex justify-start w-full items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-lg font-medium leading-none">
               Om Patil
              </p>
            
            </div>
      
          </div>
       
      </CardHeader>
      <CardContent className="p-0 shadow-white rounded-xl">
        <img src="https://fish-tree-production.up.railway.app/downloadfile/post1/post1" width="full" height="400" style={{borderRadius: '10px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)'}} alt="Post image" className="object-cover aspect-video" />
      </CardContent>
      <CardFooter className="grid gap-2 p-2 pb-4">
      <p className="text-sm  mt-3 mr-2 text-muted-foreground">
                Aug 7 2024
              </p>
        <div className="flex items-center w-full">
          <Button variant="ghost" size="icon">
            <HeartIcon className="w-4 h-4" />
            <span className="sr-only">Like</span>
          </Button>
          <Button variant="ghost" size="icon">
            <MessageCircleIcon className="w-4 h-4" />
            <span className="sr-only">Comment</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShareIcon className="w-4 h-4" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
        <Separator className="mb-1 bg-white opacity-20" />
        <div className="px-2 text-sm w-full grid gap-1.5">
          <div>
            <Link href="#" className="font-medium" prefetch={false}>
              john
            </Link>
            This post is amazing! 😍
          </div>
          <div>
            <Link href="#" className="font-medium" prefetch={false}>
              amelia
            </Link>
            I love the new design! 👏
          </div>
        </div>
      </CardFooter>
      <Separator className="my-4 bg-white opacity-30" />
    </Card>
        )
       })
    }
    
    </InfiniteScroll>
    </div>)
}

function HeartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MessageCircleIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function ShareIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}
 const feed =()=>{
    return(
        <div className="flex w-full justify-center ">
         <div className=" flex p-4 h-fit w-full ">
         <Component></Component>
         </div>
        </div>
    );
};
export default feed