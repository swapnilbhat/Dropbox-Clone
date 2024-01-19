import { SignIn, SignInButton, SignInWithMetamaskButton, SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <header className="flex items-center justify-between ">
      <Link href="/" className="flex items-center space-x-2">
        <div className="bg-[#0160FE] w-fit">
          <Image
            src="https://www.shareicon.net/download/128x128//2015/11/08/668675_box_512x512.png"
            alt="dropbox logo"
            className="invert"
            height={50}
            width={50}
          />
        </div>
        <h1 className="text-4xl font-bold">Dropbox</h1>
      </Link>
      <div className="px-5 flex space-x-2 items-center">  
        <ThemeToggler/>
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal"/> 
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
