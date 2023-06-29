import ShowTeam from "./team";

export const metadata = {
	title: "Over ons",
	description: "Over Influentia en het team",
	openGraph: {
		title: "Over ons | Influentia",
		description: "Over Influentia en het team",
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
		title: "Over ons | Influentia",
		description: "Over Influentia en het team",
		images: ["/influentia_back.webp"],
	},
};

export default function About() {
	return (
		<main>
			<div className="content-wrap">
				<div className="content about">
					<section className="text">
						<h2>Over ons</h2>
						<div className="column">
							<p className="first-letter">Influentia</p>
							<p>
								is gespecialiseerd in het bouwen van websites, het creëren van
								trendy 3D-animaties en het ontwerpen van visuele vormgeving en
								media. Wij doen niet aan voorgebouwde templates, maar zijn juist
								groot voorstander van op maat gemaakt werk.
								<br />
								<br />
								We leveren hoogwaardige en creatieve oplossingen in deze
								vakgebieden. Onze projecten omvatten een breed scala aan
								onderwerpen, waarbij we verschillende innovatieve technieken
								toepassen. We streven ernaar om met onze projecten een positieve
								invloed op de maatschappij uit te oefenen.
							</p>
						</div>
					</section>
					<h2>Het team</h2>
					<ShowTeam />
				</div>
			</div>
		</main>
	);
}
