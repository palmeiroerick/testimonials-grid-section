type TextProps = {
  children: string;
  className?: string;
};

export default function Text({ children, className }: TextProps) {
  return <h2 className={`${className} text-[13px] font-medium`}>{children}</h2>;
}
