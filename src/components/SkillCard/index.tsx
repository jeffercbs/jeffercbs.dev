import clsx from "clsx";
import type { ComponentChildren, FunctionComponent } from "preact";

interface Props {
   class?: string;
   tag?: string;
   color?: string;
   children: ComponentChildren;
}

const SkillCard: FunctionComponent<Props> = ({
   children,
   tag,
   color,
   class: className,
}) => {
   const cn: string = clsx(
      className ?? "",
      color,
      "rounded-md hover:shadow-2xl hover:shadow-zinc-800 ease-in-out min-h-[300px]"
   );

   return (
      <article className={cn}>
         <div className="px-4 py-8 flex flex-col h-full lg:justify-start justify-center items-center">
            <div class="w-full flex justify-start pb-8">
               <span className="uppercase font-semibold border-2 rounded-full px-6">
                  {tag}
               </span>
            </div>
            {children}
         </div>
      </article>
   );
};

export default SkillCard;
