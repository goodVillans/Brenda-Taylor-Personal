import React from "react";

type Props = {
  children: React.ReactNode;
};

const HeadText = ({ children }: Props) => {
  return (
    <div>
      <h1 className="basis-3/5 text-xl font-bold text-claret">{children}</h1>
    </div>
  );
};

export default HeadText;
