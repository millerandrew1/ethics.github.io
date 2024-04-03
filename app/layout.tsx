// Layout.tsx
import React from 'react';
import "./globals.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Content area */}
      <div className="flex-1">{children}</div>

    </div>
  );
};

export default Layout;
