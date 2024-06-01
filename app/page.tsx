import { PrismaClient } from "@prisma/client";
import React from "react";

const client = new PrismaClient();

interface User {
  id: number;
  username: string;
  password: string;
}

async function getUserDetails() {
  try {
    const users: User[] = await client.user.findMany({});
    return users;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default async function Home() {
  const userData = await getUserDetails();

  if (!userData) {
    return <div>Error fetching user data</div>;
  }

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          {userData.map((user) => (
            <div key={user.id} className="mb-4">
              <div>ID: {user.id}</div>
              <div>Username: {user.username}</div>
              <div>Password: {user.password}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
