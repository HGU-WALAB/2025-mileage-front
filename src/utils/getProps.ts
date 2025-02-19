export type GetProps<T> = T extends React.FC<infer P> ? P : never;
