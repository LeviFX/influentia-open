import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { ReturnIcon } from "@/app/components/icons";
import urlBuilder from "@sanity/image-url";
import Link from "next/link";
import { redirect } from "next/navigation";

export const dynamic = "auto",
	revalidate = 60,
	fetchCache = "auto";

export async function generateMetadata({ params }) {
	const slug = params.slug;
	const project = await getProject(slug);

	if (!project) {
		redirect("/projects");
	}

	return {
		title: project.name,
		description: project.description,
		openGraph: {
			title: project.name,
			description: project.description,
			images: {
				url: project.image,
				alt: [project.name, " Influentia"],
			},
			type: "article",
		},
		twitter: {
			card: "summary_large_image",
			title: project.name,
			description: project.description,
			images: project.image,
		},
	};
}

export default async function ShowSingleProject({ params }) {
	const slug = params.slug;
	const project = await getProject(slug);

	if (!project) {
		redirect("/projects");
	}

	const ImageComponent = ({ value }) => {
		return (
			<img
				src={urlBuilder({ projectId: "km5zrloz", dataset: "production" })
					.image(value)
					.url()}
				alt={value.alt || " "}
				className={value.size}
				loading="lazy"
			/>
		);
	};

	const components = {
		types: {
			image: ImageComponent,
		},
	};

	return (
		<main className="flex">
			<div className="content-wrap">
				<Link href="../projects" className="go-back" aria-label="Terug gaan">
					<ReturnIcon />
					Terug gaan
				</Link>
				<div className="content project">
					<div className="project-content">
						<PortableText value={project.content} components={components} />
					</div>
					{project.url && (
						<a
							href={project.url}
							className="final-url"
							aria-label="Volledige project"
							target="_blank"
						>
							Bekijk hier het hele project
						</a>
					)}
				</div>
			</div>
		</main>
	);
}
