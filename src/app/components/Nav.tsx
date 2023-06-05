"use client"

import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={"grow flex justify-end space-x-8 align-middle"}>
      <Link href={"#"} className={"p-3 flex align-middle"}>
        <Image src={"/assets/images/person-outline.svg"} alt={"person icon"} width={30} height={30}/>
      </Link>
      <Link href={"#"} className={"flex space-x-4 p-3"}>
        <Image src={"/assets/images/cart-outline.svg"} alt={"cart icon"} width={30} height={30}/>
        <span className={"absolute px-1 bg-red-600 rounded text-center text-xs ml-8"}>0</span>
        <div className={"flex flex-col justify-center"}>
          <span className={"text-gray-400 text-[.70rem]"}>Votre panier</span>
          <span className={"font-bold"}>1424.24$</span>
        </div>
      </Link>
    </nav>
  )
}

export default Nav;