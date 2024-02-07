type TitleProps = {
  children: string;
  className?: string;
};

export default function Title({ children, className }: TitleProps) {
  return <p className={`${className} text-lg font-semibold`}>{children}</p>;
}
