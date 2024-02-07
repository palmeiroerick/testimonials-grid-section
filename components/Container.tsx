type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return <div className={`${className} p-8 rounded-lg flex flex-col gap-3 lg:justify-between`}>{children}</div>;
}
