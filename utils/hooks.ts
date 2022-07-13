import { useEffect, useState } from "react";

export default function usePageScroll(): { scrollY: number; maxY: number; isAtMax: boolean; scrollViewY: number } {
	const [scheduled, setScheduled] = useState(false);
	const [maxY, setMaxY] = useState(0);
	const [isAtMax, setIsAtMax] = useState(false);
	const [pageYOffset, setPageYOffset] = useState(0);
	const [scrollViewY, setScrollViewY] = useState(0);

	useEffect(() => {
		if (!maxY) {
			setMaxY(Math.max(document.body.scrollHeight - window.innerHeight, window.innerHeight));
			setPageYOffset(window.scrollY);
		}

		function listener() {
			if (!scheduled) {
				setTimeout(() => {
					setScheduled(false);
					// update values
					let { scrollY } = window;
					setPageYOffset(window.scrollY);

					if (scrollY >= maxY) {
						setIsAtMax(true);
					} else if (isAtMax) {
						setIsAtMax(false);
					}
				}, 250);

				setScheduled(true);
			}
		}

		window.addEventListener("scroll", listener);

		return () => {
			window.removeEventListener("scroll", listener);
		};
	}, [scheduled, isAtMax, maxY]);

	useEffect(() => {
		if (maxY) {
			setScrollViewY(pageYOffset + window.innerHeight);
		}
	}, [pageYOffset, maxY]);

	return {
		scrollY: pageYOffset,
		maxY,
		isAtMax,
		scrollViewY,
	};
}
