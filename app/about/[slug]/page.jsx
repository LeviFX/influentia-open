import { getTeam } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import {
	InstagramIcon,
	LinkedinIcon,
	FacebookIcon,
	BehanceIcon,
	TwitterIcon,
	WebIcon,
	ReturnIcon,
} from "@/app/components/icons";
import Link from "next/link";
import { redirect } from "next/navigation";

export const dynamic = "auto",
	revalidate = 60,
	fetchCache = "auto";

export async function generateMetadata({ params }) {
	const slug = params.slug;
	const team = await getTeam(slug);

	if (!team) {
		redirect("/about");
	}

	return {
		title: team.fullname,
		description: team.seo,
		openGraph: {
			title: team.fullname,
			description: team.seo,
			images: {
				url: team.image,
				alt: [team.fullname, " Influentia"],
			},
		},
		twitter: {
			card: "summary_large_image",
			title: team.fullname,
			description: team.seo,
			images: team.image,
		},
	};
}

export default async function AboutPerson({ params }) {
	const slug = params.slug;
	const team = await getTeam(slug);

	if (!team) {
		redirect("/about");
	}

	return (
		<main className="flex">
			<div className="content-wrap">
				<Link href="../about" className="go-back" aria-label="Terug gaan">
					<ReturnIcon />
					Terug gaan
				</Link>
				<div className="content person">
					<div className="info-wrap">
						<h1>{team.fullname && team.fullname}</h1>
						<span>{team.job && team.job}</span>
						<div className="person-content">
							<PortableText value={team.content && team.content} />
						</div>
					</div>
					<div className="sidebar">
						<img
							src={team.image && team.image}
							alt={team.fullname && team.image}
						/>
						<ul>
							{team.instagram && (
								<li key={team.instagram}>
									<a
										href={team.instagram}
										target="_blank"
										aria-label="Instagram"
									>
										<InstagramIcon />
										Instagram
									</a>
								</li>
							)}
							{team.linkedin && (
								<li key={team.linkedin}>
									<a href={team.linkedin} target="_blank" aria-label="LinkedIn">
										<LinkedinIcon />
										LinkedIn
									</a>
								</li>
							)}
							{team.facebook && (
								<li key={team.facebook}>
									<a href={team.facebook} target="_blank" aria-label="Facebook">
										<FacebookIcon />
										Facebook
									</a>
								</li>
							)}
							{team.behance && (
								<li key={team.behance}>
									<a href={team.behance} target="_blank" aria-label="Behance">
										<BehanceIcon />
										Behance
									</a>
								</li>
							)}
							{team.twitter && (
								<li key={team.twitter}>
									<a href={team.twitter} target="_blank" aria-label="Twitter">
										<TwitterIcon />
										Twitter
									</a>
								</li>
							)}
							{team.customsite && (
								<li key={team.customsite}>
									<a
										href={`https://${team.customsite}`}
										target="_blank"
										aria-label="Website"
									>
										<WebIcon />
										{team.customsite}
									</a>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
