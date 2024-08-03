import {User, UserInput, UserDoc} from '../../../../models/userschema';
import clientPromise from '@/lib/mongodb';
import {nanoid} from 'nanoid';
import type { NextRequest, NextResponse } from 'next/server'



export async function POST(req:NextRequest)
{ const id  =nanoid()
  
  const {name ,email,password} =await req.json();
  const exists =true;
  console.log(req.body)
  if (!email || !name || !password ) {
    return new Response (JSON.stringify({ message: 'The fields email, name, password and age are required' }))
  }
 const userInput :UserInput={
    id,
    name,
    email,
    password,
    exists,
 };
 console.log(userInput)
 const client = await clientPromise;
 const db =client.db("Xconnect")
 
 let user =await db.collection('users').findOne({email:email});;
 console.log(user);
if(!user)
    {
      let u= await  db.collection('users').insertOne({
            userId:nanoid(),
            name: userInput.name,
            email:userInput.email,
            password:userInput.password,
            exists:userInput.exists
        });
        console.log(u);
        return new Response (JSON.stringify({ success: "Success" }));
    }
    else {
        return new Response (JSON.stringify({ error: "User already exists" }))
      }

}