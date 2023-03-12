import { Fragment } from "preact";
import { LINKS } from "@/consts";

export const MenuMobile = () => {
   return (
      <div className="menu-container">
         <nav class="flex">
            <ul class="links">
               {LINKS.map(({ name, path }) => (
                  <li key={name} className="link">
                     <a href={path}>
                        <span>{name}</span>
                     </a>
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   );
};
