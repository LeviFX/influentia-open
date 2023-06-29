import "./style/global.scss";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Script from "next/script";

export const metadata = {
	title: {
		default: "Influentia",
		template: "%s | Influentia",
	},
	description:
		"Influentia, een jong Creatief Bureau. Gespecialiseerd in Websites, 3D visualisaties en media.",
	colorScheme: "#fcfbfa",
	icons: {
		icon: { url: "/favicon.webp", type: "image/webp" },
	},
	openGraph: {
		title: "Influentia",
		description:
			"Influentia, een jong Creatief Bureau. Gespecialiseerd in Websites, 3D visualisaties en media.",
		siteName: "Influentia",
		images: {
			url: "/influentia_back.webp",
			width: "986",
			height: "660",
			alt: "Image cover of Influentia",
		},
		locale: "nl_NL",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snipper": -1,
		},
	},
	twitter: {
		card: "summary_large_image",
		title: "Influentia",
		description: "",
		images: ["/influentia_back.webp"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Script
				data-goatcounter="https://influentia.goatcounter.com/count"
				async
				src="https://gc.zgo.at/count.js"
			/>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
