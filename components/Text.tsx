type TextProps = {
  children: string;
};

export default function Text({ children }: TextProps) {
  return <h2>{children}</h2>;
}
