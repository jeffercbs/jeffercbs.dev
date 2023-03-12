import type { FunctionComponent, ComponentChildren } from "preact";

interface IconProps {
   width?: number;
   height?: number;
   color?: string;
   children?: ComponentChildren;
}

export const Icon: FunctionComponent<IconProps> = ({
   children,
   height,
   width,
   color,
}) => {
   return (
      <svg
         width={width || 24}
         height={height || 24}
         fill={color || "none"}
         stroke={color || "currentColor"}
         strokeWidth={1.5}
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
      >
         {children}
      </svg>
   );
};

export const GithubIcon: FunctionComponent<IconProps> = (props) => {
   return (
      <Icon {...props}>
         <path
            fill={props.color || "none"}
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
         />
      </Icon>
   );
};

export const ArrowDownIcon: FunctionComponent<IconProps> = (props) => {
   return (
      <Icon {...props}>
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
         />
      </Icon>
   );
};
