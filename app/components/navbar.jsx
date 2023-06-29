"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	return (
		<nav className={isActive ? "open" : "closed"}>
			<div className="backdrop">
				<span></span>
				<span></span>
				<span></span>
				<Link
					href="../"
					className="logo"
					aria-label="Influentia"
					onClick={isActive ? handleClick : null}
				>
					<Image
						alt="Influentia logo"
						src="/influentia_small.webp"
						fill
						sizes="width: 100px height: 100px"
						priority
					/>
				</Link>
			</div>
			<Link href="../" aria-label="Influentia" className="logo-title">
				<h1>INFLUENTIA</h1>
			</Link>
			<ul>
				<li>
					<Link
						href="/projects"
						aria-label="Projecten"
						onClick={isActive ? handleClick : null}
					>
						Projecten
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						aria-label="Over ons"
						onClick={isActive ? handleClick : null}
					>
						Over ons
					</Link>
				</li>
				<li>
					<Link
						href="/contact"
						aria-label="Contact"
						onClick={isActive ? handleClick : null}
					>
						Contact
					</Link>
				</li>
			</ul>
			<div className="nav-hamburger" onClick={handleClick}>
				<div className="line l1"></div>
				<div className="line l2"></div>
				<div className="line l3"></div>
			</div>
		</nav>
	);
}
