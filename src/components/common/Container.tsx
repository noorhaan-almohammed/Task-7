import { ReactNode } from "react";

function Container({
  children,
  title,
  bgColor,
}: {
  children: ReactNode;
  title?: string;
  bgColor?: string;
}) {
  return (
    <section
      className={`relative px-4 md:px-6 lg:px-12 xl:px-32 2xl:px-62.5 flex flex-col gap-8 md:gap-12 xl:gap-15 ${bgColor}`}
    >
      {title && (
        <h1 className="font-extrabold text-2xl md:text-[32px] text-grey">{title}</h1>
      )}
      <>{children}</>
    </section>
  );
}

export default Container;
