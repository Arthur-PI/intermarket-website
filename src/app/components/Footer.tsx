import Image from "next/image";

interface trust_card_props {
  icon: string,
  title: string,
  text: string,
}
const TrustCard = (props: trust_card_props) => {
  return (
    <div className={"flex space-x-4"}>
      <Image src={props.icon} alt={"icon"} width={50} height={20}/>
      <div>
        <h3 className={"text-lg font-bold"}>{props.title}</h3>
        <p className={"text-sm"}>{props.text}</p>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className={"w-full bg-white flex flex-col px-20 py-14"}>
      <div className={"flex justify-between"}>
        <TrustCard icon={"/assets/images/rocket.svg"} title={"Livraison Gratuite"} text={"Commandes au dessus de 200$"}/>
        <TrustCard icon={"/assets/images/return.svg"} title={"Retours 1 & 1"} text={"Annulation après 1 jour"}/>
        <TrustCard icon={"/assets/images/shield.svg"} title={"Paiement 100% Sécurisé"} text={"Garentie d'un paiement sécurisé"}/>
        <TrustCard icon={"/assets/images/support.svg"} title={"Support Dédié 24/7"} text={"Partout et tout le temps"}/>
        <TrustCard icon={"/assets/images/coupon.svg"} title={"Offres Quotidiennes"} text={"Des promos jusqu'à -70%"}/>
      </div>
      <div>
        LINKS
      </div>
      <div>
        CARDS ICONS
      </div>
    </footer>
  )
}

export default Footer