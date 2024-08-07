"use client";
import { ModeToggle } from "@/app/_components/modeToggle";
import type { NextApiRequest, NextApiResponse } from "next";

import "../../globals.css";
import { useSession, getSession } from "next-auth/react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { signIn } from "next-auth/react";
import { getUserSession } from "@/lib/sessions";
import { nanoid } from "nanoid";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGithub } from "react-icons/fa";
import logo from "../../../../public/CrossConnect.png";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SideBar } from "@/app/_components/sidebar";
import { METHODS } from "http";

export default function LoginForm() {

  type Value = string | undefined;
  const [name, setName] = useState<Value>();
  const [email, setEmail] = useState<Value>();
  const [password, setPassword] = useState<Value>();
  const { data: session, status } = useSession();


   
  
  const Google = async () => {
    console.log("Google sign-in function called");
    try {
      console.log("Attempting to sign in with Google");
      const result = await signIn("google", { redirect: false });
      console.log("Sign-in result:", result);
      
      if (result?.error) {
        console.error("Google sign-in error:", result.error);
      } else if (result?.ok) {
        console.log("Google sign-in successful");
      } else {
        console.log("Unexpected result from signIn:", result);
      }
    } catch (error) {
      console.error("Caught error during Google sign-in:", error);
    } finally {
      console.log("Google sign-in process completed");
    }
  };
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return (
      <div className=" flex  h-screen w-full justify-center ">
        <Card className="mt-20 border border-slate-800 rounded-xl  w-9/12 h-4/6 lg:w-1/2 max-w-lg justify-center  ">
          <div className="flex justify-between  ">
            <CardHeader>
              <CardTitle className="text-4xl font-semibold mb-8 text-center ml-10">
                ClubHub
              </CardTitle>
              <CardTitle className="text-2xl font-medium mb-2 ">
                Let's Get You in
              </CardTitle>

              <CardDescription className="text-md">
                Login or Enter your email below to create an account
              </CardDescription>
            </CardHeader>
            <div className="p-4">
              <ModeToggle></ModeToggle>
            </div>
          </div>
          <CardContent className=" flex mt-6 items-center">
            <Button
              variant="outline"
              className="w-full mr-2"
              onClick={() => signIn("github")}
            >
              {" "}
              <FaGithub className="mr-2" />
              Github
            </Button>
            <Button
              variant="outline"
              className="w-full ml-2"
              onClick={() => Google()}
            >
              {" "}
              <FaGoogle className="mr-2" />
              Google
            </Button>
          </CardContent>
          <div className="flex justify-center">
            <p className="absolute text-sm fon opacity-70 z-10 font-bold ">
              OR CONTINUE WITH
            </p>

            <hr className="opacity-15 mt-3 mr-20 w-3/12" />
            <hr className="opacity-15 mt-3 ml-20 w-3/12" />
          </div>
          <CardFooter className="flex flex-col  w-full mt-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                className="mb-1"
                value={name}
                onChange={(event) => {
                  setName(event?.target.value)
                  //console.log(name);
                }}
              />
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                className="mb-1"
                value={email}
                onChange={(event) => {
                  setEmail(event?.target.value);
                }}
              />
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="Password"
                className="mt-1"
                value={password}
                onChange={(event) => {
                  setPassword(event?.target.value);
                }}
              />
            </div>
            <Button className="mt-4 w-full ">Create account</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  if (status == "authenticated") {
  return ;
  }
}
