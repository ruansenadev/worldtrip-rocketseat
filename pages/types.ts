export type TopCities = { [Key: string]: TopCity[] };

export type TopCity = { name: string; background?: string; country?: Country };

export type Country = { name: string; flag?: string };

export type Countries = { [Key: string]: Country };

export type Continent = {
	name: string;
	description: string;
	title?: string;
	img: {
		background?: string;
		slide?: string;
	};
	statistics: {
		countries: number;
		languages: number;
		top_cities: number;
	};
	top_cities: TopCity[];
};
