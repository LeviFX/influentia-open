"use client";

import { useEffect } from "react";

export default function AnimateText() {
	useEffect(() => {
		const txts = document.querySelector(".greeting-text").children;
		const txtsLen = txts.length;
		const textInTimer = 5000;
		const textOutTimer = 4800;
		let index = 0;

		function animateText() {
			for (let i = 0; i < txtsLen; i++) {
				txts[i].classList.remove("text-in", "text-out");
			}
			txts[index].classList.add("text-in");

			setTimeout(function () {
				txts[index].classList.add("text-out");
			}, textOutTimer);

			setTimeout(function () {
				if (index === txtsLen - 1) {
					index = 0;
				} else {
					index++;
				}
				animateText();
			}, textInTimer);
		}

		animateText();
	}, []);
}
