declare module '*.svg?react' {
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}

declare module '*.png';
declare module '*.webp';
declare module '*.mp4';
