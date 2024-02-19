import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1>I am the layout for Login</h1>
      {children}
    </main>
  );
};

export default Layout;
