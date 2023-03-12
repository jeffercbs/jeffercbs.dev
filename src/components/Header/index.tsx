import { LINKS } from "@/consts";
import clsx from "clsx";
import { Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Link } from "../Link";
import "./Header.css";
import { MenuMobile } from "./MenuMobile";

export const Header = () => {
   const [isTop, setIsTop] = useState(false);
   const [isMenu, setIsMenu] = useState(false);

   function handleScroll() {
      window.scrollY > 0 ? setIsTop(true) : setIsTop(false);
   }

   useEffect(() => {
      if (typeof window !== "undefined") {
         handleScroll();
         window.onscroll = handleScroll;

         if (isMenu) {
            window.document.body.style.overflow = "hidden";
         }
      }
   }, [isMenu]);

   const headerClass = clsx("header", isTop ? "header--scrolled" : "");
   const menuClass = clsx("menu", isMenu ? "menu--active" : "hidden");

   function handledMenu() {
      isMenu ? setIsMenu(false) : setIsMenu(true);
   }

   return (
      <Fragment>
         <header className={headerClass}>
            <div className="container wrapper">
               <a href="/" className="flex items-center gap-3">
                  <img src="/logo.jpg" alt="logo" width={50} height={50} />
                  <span className="uppercase text-white font-semibold">
                     Jefferbs
                  </span>
               </a>
               <nav className="lg:flex hidden">
                  <ul class="links">
                     {LINKS.map(({ name, path }) => (
                        <li key={name} className="link">
                           <a href={path}>{name}</a>
                        </li>
                     ))}
                  </ul>
               </nav>
               <div className="h-full flex justify-center items-center gap-3">
                  <Link
                     href="/"
                     variant={isTop ? "primary" : "secondary"}
                     rounded
                  >
                     Newsletter
                  </Link>
                  <button onClick={handledMenu} className="btn-menu">
                     H
                  </button>
               </div>
            </div>
         </header>
         <div className={menuClass}>
            <div className="w-full flex justify-end">
               <button onClick={handledMenu} className="btn-menu">
                  H
               </button>
            </div>
            <MenuMobile />
         </div>
      </Fragment>
   );
};
