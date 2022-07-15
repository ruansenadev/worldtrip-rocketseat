import { MutableRefObject, useEffect, useState } from "react";

export function usePageScroll(): { scrollY: number; maxY: number; isAtMax: boolean; scrollViewY: number } {
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
					setPageYOffset(scrollY);

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

export function useScrollSpot(refs: MutableRefObject<HTMLElement | HTMLElement[] | null | null[]>, sliceSpot = 0.4): { [key: number]: boolean } {
	const { scrollViewY } = usePageScroll();
	const [spots, setSpots] = useState<{ [key: number]: number }>(Object.create(null));
	// list ref spots
	const [spoted, setSpoted] = useState<{ [key: number]: boolean }>(Object.create(null));
	// list spoted

	useEffect(() => {
		let curScrollY: number, offset: DOMRect;
		const newSpots = Object.create(null);

		if (Array.isArray(refs.current)) {
			refs.current.forEach((el, i) => {
				if (el) {
					curScrollY = window.scrollY;
          // bbox offset is relative to viewport
					offset = el.getBoundingClientRect();
					newSpots[i] = sliceSpot > 1 ? offset.top + curScrollY + sliceSpot : offset.top + curScrollY + offset.height * sliceSpot;
				}
			});
		} else if (refs.current) {
			curScrollY = window.scrollY;
			offset = refs.current.getBoundingClientRect();
			newSpots[0] = sliceSpot > 1 ? offset.top + curScrollY + sliceSpot : offset.top + curScrollY + offset.height * sliceSpot;
		}

		setSpots(newSpots);
	}, [refs, sliceSpot]);

	useEffect(() => {
		let spotedUpdated, spotsUpdated;

		for (let [i, y] of Object.entries(spots)) {
			if (y <= scrollViewY) {
				if (!spotedUpdated) spotedUpdated = { ...spoted };
				if (!spotsUpdated) spotsUpdated = { ...spots };

				spotedUpdated[+i] = true;

				delete spotsUpdated[+i];
			}
		}

		if (spotedUpdated && spotsUpdated) {
			setSpoted(spotedUpdated);
			setSpots(spotsUpdated);
		}
	}, [spots, scrollViewY, spoted]);

	// returns an indexed reference spoted in view
	return spoted;
}
