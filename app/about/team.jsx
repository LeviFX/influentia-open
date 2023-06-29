import { getTeams } from "@/sanity/sanity-utils";
import Link from "next/link";

export const dynamic = "auto",
	revalidate = 60,
	fetchCache = "auto";

export default async function ShowTeam() {
	const teams = await getTeams();
	const sortedData = teams.sort((a, b) => a.sortorder - b.sortorder);

	return (
		<div className="team-wrap">
			{sortedData.map((data) => (
				<div className="card" key={data._id}>
					<Link href={`/about/${data.slug}`} aria-label={data.name}>
						<div className="image-wrap">
							<img src={data.image} alt={data.name} />
						</div>
						<div className="card-content">
							<h3>{data.fullname}</h3>
							<span className="description">{data.job}</span>
						</div>
					</Link>
				</div>
			))}
			{/*
			<div className="card">
				<a href="" aria-label="">
					<div className="image-wrap">
						<img src="" alt="" />
					</div>
					<div className="card-content">
						<h3>Name</h3>
						<span className="job">Job</span>
					</div>
				</a>
			</div>
			*/}
		</div>
	);
}
