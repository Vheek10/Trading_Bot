/** @format */
"use client";

import { Chivo } from "next/font/google";
import "./globals.css";

const chivo = Chivo({
	weight: "400",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={chivo.className}>
			<body>{children}</body>
		</html>
	);
}
