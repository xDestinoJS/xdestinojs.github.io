import { ReactNode } from "react";
import { Metadata } from "next/types";
import "./globals.css";

export const metadata: Metadata = {
  title: "I'm xDestino",
  description: "xDestino's Projects"
}

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html>
			<body>
				{children}
			</body>
		</html>
	)
}
