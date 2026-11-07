
"use client";

import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProtectedLayout({ children }) {
  const { isAuthenticated, isLoading} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/signup");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main >{children}</main>
      <Footer />
    </div>
  );
}