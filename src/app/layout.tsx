import React from "react";
import type { Metadata } from "next";
import { Providers } from "./Providers";
import { Roboto } from "next/font/google";

export interface IChildren {
  children: React.ReactNode;
}

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Serasa Experian",
  description: "Serasa Experian",
};

export default function RootLayout({ children }: IChildren) {
  return (
    <html lang="pt-br">
      <head>
        <title>Serasa Experian</title>
        <meta charSet="utf-8" />
      </head>
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
