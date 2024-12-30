"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";

// import { useBalance } from "@repo/store";
export default function Home() {
  const session = useSession();
  // const balance = useBalance();
  return (
    <div>
     <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
      {/* <h1 className="text-2xl">Hii there {balance}</h1> */}
    </div>
  );
}
