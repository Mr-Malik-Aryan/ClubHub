import { error } from "console";
import {MongoClient} from "mongodb"
const URI= process.env.MONGO_URI;
const options ={
    useNewUrlParser:true,
    useUnifiedTopology:true,
    socketTimeoutMS:30000
}
if(!URI)
    throw error ("Mongo Uri not Found");
let client
let clientPromise:Promise<MongoClient>
if(process.env.NODE_ENV == 'development')
    {
        let globalWithMongo = global as typeof globalThis & {
            _mongoClientPromise?: Promise<MongoClient>
       
        }
        if (!globalWithMongo._mongoClientPromise)
            {
                client =new MongoClient(URI,options);
                globalWithMongo._mongoClientPromise =client.connect();

            }
         clientPromise = globalWithMongo._mongoClientPromise
           }   else
            {
                client = new MongoClient(URI,options)
                clientPromise=client.connect()
            }
    
    export default clientPromise


