import clsx from "clsx";
import type { ComponentChildren, FunctionComponent } from "preact";
import "./Link.css";

interface LinkProps {
   external?: boolean;
   href: string;
   variant?: "primary" | "secondary";
   rounded?: boolean;
   class?: string;
   children: ComponentChildren;
}

export const Link: FunctionComponent<LinkProps> = ({
   children,
   class: className,
   external,
   href,
   variant,
   rounded,
}) => {
   const cn = clsx(
      "btn",
      className ? className : "",
      variant ? `btn--${variant}` : "",
      rounded ? "rounded-full" : ""
   );

   if (!external) {
      return (
         <a href={href} class={cn}>
            <span>{children}</span>
         </a>
      );
   } else {
      return (
         <a href={href} class={cn} target="_blank" rel="noopener noreferrer">
            <span>{children}</span>
         </a>
      );
   }
};
