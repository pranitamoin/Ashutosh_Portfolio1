import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";

export const metadata: Metadata = {
  title: "Ashutosh Nimbalkar | R&D Engineer & ECE Researcher Portfolio",
  description: "R&D portfolio of Ashutosh Nimbalkar, ECE student specializing in Embedded Systems, Semiconductor & VLSI Design, FPGAs, and RF/Antenna simulation.",
  keywords: ["Semiconductor Design", "VLSI Design", "Embedded Systems", "FPGA Design", "Verilog", "Ansys HFSS", "Data Science", "Amdox Intern", "NCRA GMRT", "IEEE Chairperson"],
  authors: [{ name: "Ashutosh Nimbalkar" }],
  openGraph: {
    title: "Ashutosh Nimbalkar | R&D Engineer Portfolio",
    description: "R&D portfolio of Ashutosh Nimbalkar, ECE student specializing in Embedded Systems, Semiconductor & VLSI Design, FPGAs, and RF/Antenna simulation.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

