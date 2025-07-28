import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header variant="minimal" />
      <main className="flex-grow flex items-center justify-center p-4">
        {/* Your login/signup form will be rendered here */}
        {children}
      </main>
      <Footer />
    </div>
  );
}