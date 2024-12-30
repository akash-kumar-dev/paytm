"use client";
import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient();

import { useBalance } from "@repo/store";
export default function Home() {
  const balance = useBalance();
  return (
    <div>
      <h1 className="text-2xl">Hii there {balance}</h1>
    </div>
  );
}
