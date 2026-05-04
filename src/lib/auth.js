import dns from "node:dns";
dns.setServers(['8.8.8.8','8.8.4.4']); 

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient( process.env.MONGO_URI );
const db = client.db("qurbani-haat");

// password = tsGNaaRau9lH4wcD
// username = betterAuthDbUSER

export const auth = betterAuth({

 socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID , 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET , 
        }, 
    },

  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
});