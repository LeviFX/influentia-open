import { getProjects } from "@/sanity/sanity-utils";
import { getPreferencedProjects } from "@/sanity/sanity-utils";
import Link from "next/link";

export const dynamic = "auto",
	revalidate = 60,
	fetchCache = "auto";

export default async function ShowProjects({ preference }) {
	let projects = [];

	if (preference) {
		projects = await getPreferencedProjects();
	} else {
		projects = await getProjects();
	}

	const sortedData = projects.sort((a, b) => a.sortorder - b.sortorder);

	return sortedData.map((data) => (
		<div className="card" key={data._id}>
			<Link href={`/projects/${data.slug}`} aria-label={data.name}>
				<div className="image-wrap">
					<img src={data.image} alt={data.name} />
				</div>
				<div className="card-content">
					<h3>{data.name}</h3>
					<span className="description">{data.description}</span>
				</div>
			</Link>
		</div>
	));
}
