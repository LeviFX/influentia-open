import ShowProjects from "./projects";

export const metadata = {
	title: "Projecten",
	description: "Bekijk al onze projecten",
	openGraph: {
		title: "Projecten | Influentia",
		description: "Bekijk al onze projecten",
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
		title: "Projecten | Influentia",
		description: "Bekijk al onze projecten",
		images: ["/influentia_back.webp"],
	},
};

export default function Projects() {
	return (
		<main>
			<div className="content-wrap">
				<div className="content projects">
					<h2>Bekijk ons werk</h2>
					<div className="projects-wrap">
						<ShowProjects />
					</div>
				</div>
			</div>
		</main>
	);
}
