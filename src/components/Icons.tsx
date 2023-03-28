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
         className="w-6 h-6 text-2xl"
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

export const HomeIcon: FunctionComponent<IconProps> = (props) => {
   return (
      <Icon {...props}>
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
         />
      </Icon>
   );
};

export const XIcon: FunctionComponent<IconProps> = (props) => {
   return (
      <Icon {...props}>
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
         />
      </Icon>
   );
};

export const MenuIcon: FunctionComponent<IconProps> = (props) => {
   return (
      <Icon {...props}>
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
         />
      </Icon>
   );
};

export const SquareIcon: FunctionComponent<IconProps> = (props) => {
   return (
      <Icon {...props}>
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
         />
      </Icon>
   );
};

export const QueueIcon: FunctionComponent<IconProps> = (props) => {
   return (
      <Icon {...props}>
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
         />
      </Icon>
   );
};

export const PaperIcon: FunctionComponent<IconProps> = (props) => {
   return (
      <Icon {...props}>
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
         />
      </Icon>
   );
};
