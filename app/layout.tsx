import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/Theme-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "watchtowerai | ObjectDetection",
    description: "An AI-powered Next.js 14 web application with advanced people detection and recording capabilities. Experience