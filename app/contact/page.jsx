import ShowContact from "./contact";

export const metadata = {
	title: "Contact",
	description: "Neem contact op",
	openGraph: {
		title: "Contact | Influentia",
		description: "Neem contact op",
		images: {
			url: "/influentia_back.webp",
			width: "986",
			height: "660",
			alt: "Image cover of Influentia",
		},
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
		title: "Contact | Influentia",
		description: "Neem contact op",
		images: ["/influentia_back.webp"],
	},
};

export default function Contact() {
	return (
		<main>
			<div className="content-wrap single">
				<div className="content contact single">
					<h2>Tijd voor een transformatie?</h2>
					<p>Of gewoon een vraag?</p>
					<ShowContact />
				</div>
			</div>
		</main>
	);
}
