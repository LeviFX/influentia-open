import AnimateText from "./components/AnimateText";
import ShowContact from "./contact/contact";
import ShowProjects from "./projects/projects";

export const dynamic = "auto",
	revalidate = 360,
	fetchCache = "auto";

export default function HomePage() {
	return (
		<main>
			<div className="landing">
				<h2 className="greeting-text">
					<AnimateText />
					<span>
						<div className="old">Authentiek</div> &{" "}
						<div className="new">Modern</div>
					</span>
					<span>Creatief</span>
					<span>Esthetisch</span>
					<span>Vernieuwend</span>
				</h2>
				<video autoPlay muted loop playsInline>
					<source src="/influentiabackground.mp4" type="video/mp4"></source>
					Your browser does not support the video tag.
				</video>
			</div>
			<div className="content-wrap wrap-about">
				<img
					src="left_hand.webp"
					className="left-hand"
					alt="left hand pointing"
					loading="lazy"
				/>
				<img
					src="right_hand.webp"
					className="right-hand"
					alt="right hand pointing"
					loading="lazy"
				/>
				<div className="content main">
					<h2 className="start">Invloed, beïnvloeden</h2>
					<div className="column main reverse left">
						<img
							src="left_hand.webp"
							className="left-hand mobile"
							alt="left hand pointing"
							loading="lazy"
						/>
						<img src="web.webp" className="text-image web" alt="Custom frame from the Influentia animation" loading="lazy"/>
						<div className="text-wrap">
							<p>
								We zijn meesters in het bouwen van adembenemende websites,
								trendy 3D visualisaties en digitale media. Onze diensten zijn
								niet alleen mooi, maar ook intuïtief en gebruiksvriendelijk. Met
								behulp van nieuwe en betrouwbare technologieën creëren we
								digitale ervaringen die indruk maken.
							</p>
						</div>
					</div>
					<div className="column main center">
						<img
							src="right_hand.webp"
							className="right-hand mobile"
							alt="right hand pointing"
							loading="lazy"
						/>
						<div className="text-wrap center">
							<p>
								Geen saaie templates hier! We brengen jouw visie tot leven met
								een uniek design. Verwacht geen standaardoplossingen, want we
								houden ervan iets bijzonders te creëren.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="content-wrap projects">
				<div className="content projects-main">
					<h2>Recente projecten</h2>
					<div className="projects-wrap">
						<ShowProjects preference={true} />
					</div>
				</div>
			</div>
			<div className="content-wrap wrap-contact">
				<div className="content contact">
					<h2>Interesse?</h2>
					<ShowContact />
				</div>
			</div>
		</main>
	);
}
