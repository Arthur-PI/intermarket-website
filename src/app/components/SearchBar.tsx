"use client"

import Image from "next/image";

const SearchBar = () => {
  return (
    <div className={"flex bg-slate-100 rounded-md space-x-2 h-fit px-4 py-2 m-auto"}>
      <select className={"bg-slate-100 cursor-pointer"}>
        <option value={1}>Toutes catégories</option>
        <option value={2}>Fruits et légumes</option>
        <option value={3}>Épicerie sucrée</option>
        <option value={4}>Épicerie salée</option>
        <option value={5}>Boissons, cave</option>
        <option value={6}>Boucherie</option>
        <option value={7}>Poissonnerie</option>
        <option value={8}>Crèmerie</option>
        <option value={9}>Surgelés</option>
        <option value={10}>Animaux</option>
      </select>
      <Image src={"/assets/images/remove-outline.svg"} alt={"vertical separator"} width={35} height={0} className={"opacity-60"} />
      <input placeholder={"Je cherche ..."} className={"bg-slate-100 w-96"}/>
      <Image src={"/assets/images/search-outline.svg"} alt={"search icon"} width={25} height={25}/>
    </div>
  )
}

export default SearchBar