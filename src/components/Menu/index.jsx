import clsx from "clsx";
import { useEffect, useState } from "preact/hooks";
import { Link } from "react-scroll";
import { HomeIcon, PaperIcon, QueueIcon, SquareIcon } from "../Icons";

const Menu = () => {
   const [isVisible, setIsVisible] = useState(false);

   function visibility() {
      window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
   }

   useEffect(() => {
      if (typeof window !== "undefined") {
         visibility();
         window.addEventListener("scroll", visibility);
      }
   }, []);

   const cn = clsx(
      isVisible ? "fixed inset-x-0 bottom-4 lg:bottom-8 z-50" : "hidden"
   );

   return (
      <div className={cn}>
         <aside className="flex justify-center mx-auto menu-bottom">
            <ul className="flex h-12 justify-center items-center px-6 rounded-full bg-black/40 backdrop-blur-md gap-6 shadow-2xl shadow-zinc-800">
               <li className="p-2 relative group">
                  <Link to="home" spy={true} className="cursor-pointer">
                     <span className="px-2 absolute -top-8 -inset-x-2 justify-center rounded-full mb-2 bg-black/70 hidden group-hover:flex duration-300 backdrop-blur-md text-sm font-semibold">
                        Home
                     </span>
                     <HomeIcon />
                  </Link>
               </li>
               <li className="p-2 relative group">
                  <Link to="skills" spy={true} className="cursor-pointer">
                     <span className="px-2 absolute -top-8 -inset-x-2 justify-center rounded-full mb-2 bg-black/70 hidden group-hover:flex duration-300 backdrop-blur-md text-sm font-semibold">
                        Skills
                     </span>
                     <QueueIcon />
                  </Link>
               </li>
               <li className="p-2 relative group">
                  <Link to="projects" spy={true} className="cursor-pointer">
                     <span className="px-2 absolute -top-8 -inset-x-2 justify-center rounded-full mb-2 bg-black/70 hidden group-hover:flex duration-300 backdrop-blur-md text-sm font-semibold">
                        Projects
                     </span>
                     <SquareIcon />
                  </Link>
               </li>
               <li className="p-2 relative group">
                  <Link to="contact" spy={true} className="cursor-pointer">
                     <span className="px-2 absolute -top-8 -inset-x-2 justify-center rounded-full mb-2 bg-black/70 hidden group-hover:flex duration-300 backdrop-blur-md text-sm font-semibold">
                        Contact
                     </span>
                     <PaperIcon />
                  </Link>
               </li>
            </ul>
         </aside>
      </div>
   );
};

export { Menu };
