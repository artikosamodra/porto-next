import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Artiko Portofolio",
  description: "This My Portofolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
