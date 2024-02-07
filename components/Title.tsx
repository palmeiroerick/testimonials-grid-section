type TitleProps = {
  children: string;
};

export default function Title({ children }: TitleProps) {
  return <p>{children}</p>;
}
