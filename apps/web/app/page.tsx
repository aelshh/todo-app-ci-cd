export const dynamic = "force-dynamic";

import React from "react";
import { prisma } from "@repo/db";

const page = async () => {
  // const user = await prisma.user.findFirst();
  const users = await prisma.user.findMany();
  return <div>{JSON.stringify(users)}</div>;
};

export default page;

//somr random change 
