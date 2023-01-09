import { FC, PropsWithChildren } from "react";

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.3)",
        padding: 20,
        borderRadius: 5,
      }}
    >
      <h3>DarkLayout</h3>
      <div>{children}</div>
    </div>
  );
};
