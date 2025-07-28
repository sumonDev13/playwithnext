import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Header variant="full" />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {/* Your main app content (file list, etc.) will be rendered here */}
        {children}
      </main>
      <Footer />
    </div>
  );
}