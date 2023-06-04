"use client"

import Nav from "./Nav";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";

const Header = () => {
  return (
    <header className={"flex justify-start w-full h-auto px-16 py-8 border-b"}>
      <Link href={"#"} className={"mr-[140px] flex align-middle"}>
        <Image src={"/assets/images/logo.svg"} alt={"logo"} width={170} height={40}/>
      </Link>
      <SearchBar/>
      <Nav/>
    </header>
  )
}

export default Header;