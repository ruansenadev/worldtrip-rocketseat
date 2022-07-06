import { NextApiHandler } from "next";
import { Continent, Countries, TopCities } from "../types";


const COUNTRIES: Countries = {
	UnitedKingdom: { name: "United Kingdom", flag: "countries/uk-flag.png" },
	France: { name: "France", flag: "countries/france-flag.png" },
	Italy: { name: "Italy", flag: "countries/italy-flag.png" },
	CzechRepublic: { name: "Czech Republic", flag: "countries/zcech-flag.png" },
	Netherlands: { name: "Netherlands", flag: "countries/netherlands-flag.png" },
};

const TOP_CITIES: TopCities = {
	Asia: [
		{ name: "Hong Kong" },
		{ name: "Bangkok" },
		{ name: "Macau" },
		{ name: "Singapore" },
		{ name: "Dubai" },
		{ name: "Kuala Lumpur" },
		{ name: "Antalya" },
		{ name: "Shenzhen" },
		{ name: "Phuket" },
		{ name: "Tokyo" },
		{ name: "Pattaya" },
		{ name: "Taipei" },
		{ name: "Mecca" },
		{ name: "Guangzhou" },
		{ name: "Medina" },
		{ name: "Seoul" },
		{ name: "Osaka" },
		{ name: "Shanghai" },
		{ name: "Ho Chi Minh City" },
		{ name: "Denpasar" },
		{ name: "Johor Bahru" },
		{ name: "Halong" },
		{ name: "Riyadh" },
		{ name: "Jakarta" },
		{ name: "Beijing" },
		{ name: "Jerusalem" },
		{ name: "Dammam" },
		{ name: "Penang Island" },
		{ name: "Kyoto" },
		{ name: "Zhuhai" },
		{ name: "Chiang Mai" },
		{ name: "Cebu" },
		{ name: "Tel Aviv" },
		{ name: "Guilin" },
		{ name: "Chiba" },
		{ name: "Da Nang" },
		{ name: "Batam" },
		{ name: "Fukoka" },
		{ name: "Abu Dhabi" },
		{ name: "Jeju" },
		{ name: "Krabi" },
	],
	AmericaNorte: [
		{ name: "New York City" },
		{ name: "Miami" },
		{ name: "Los Angeles" },
		{ name: "Las Vegas" },
		{ name: "Cancun" },
		{ name: "Orlando" },
		{ name: "Toronto" },
		{ name: "Vancouver" },
		{ name: "San Francisco" },
		{ name: "Honolulu" },
		{ name: "Lima" },
	],
	AmericaSul: [{ name: "Rio de Janeiro" }],
	Africa: [
		{ name: "Delhi" },
		{ name: "Mumbai" },
		{ name: "Agra" },
		{ name: "Chennai" },
		{ name: "Jaipur" },
		{ name: "Cairo" },
		{ name: "Johannesburg" },
		{ name: "Marrakech" },
		{ name: "Kolkata" },
		{ name: "Hurghada" },
		{ name: "Bangalore" },
	],
	Europa: [
		{ name: "London", background: "cities/london-background.jpg", country: COUNTRIES.UnitedKingdom },
		{ name: "Paris", background: "cities/paris-background.jpg", country: COUNTRIES.France },
		{ name: "Istanbul" },
		{ name: "Rome", background: "cities/rome-background.jpg", country: COUNTRIES.Italy },
		{ name: "Prague", background: "cities/prague-background.jpg", country: COUNTRIES.CzechRepublic },
		{ name: "Amsterdam", background: "cities/amsterdam-background.jpg", country: COUNTRIES.Netherlands },
		{ name: "Barcelona" },
		{ name: "Milan" },
		{ name: "Vienna" },
		{ name: "Berlin" },
		{ name: "Athens" },
		{ name: "Moscow" },
		{ name: "Venice" },
		{ name: "Madrid" },
		{ name: "Dublin" },
		{ name: "Florence" },
		{ name: "Hanoi" },
		{ name: "Munich" },
		{ name: "St. Petersburg" },
		{ name: "Brussels" },
		{ name: "Budapest" },
		{ name: "Lisbon" },
		{ name: "Heraklion" },
		{ name: "Copenhagen" },
		{ name: "Krakow" },
		{ name: "Warsaw" },
		{ name: "Mugla" },
		{ name: "Buenos Aires City" },
		{ name: "Frakfurt" },
		{ name: "Stockholm" },
		{ name: "Nice" },
		{ name: "Porto" },
		{ name: "Rhodes" },
	],
	Oceania: [{ name: "Sydney" }, { name: "Melbourne" }, { name: "Auckland" }],
};

const CONTINENTS: Continent[] = [
	{
		name: "Europa",
		title: "O continente mais antigo.",
		description: `A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.`,
		img: {
			background: "continents/europe-background.jpg",
			slide: "continents/europe-slide.jpg",
		},
		statistics: {
			countries: 50,
			languages: 60,
			top_cities: TOP_CITIES.Europa?.length ?? 0,
		},
		top_cities: TOP_CITIES.Europa ?? [],
	},
	{
		name: "América do Norte",
		title: "A América desenvolvida.",
		description: `A América do Norte é um subcontinente que compreende a porção setentrional do continente americano.`,
		img: {},
		statistics: {
			countries: 4,
			languages: 6,
			top_cities: TOP_CITIES.AmericaNorte?.length ?? 0,
		},
		top_cities: TOP_CITIES.AmericaNorte ?? [],
	},
	{
		name: "América do Sul",
		title: "América tropical.",
		description: `A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano.`,
		img: {},
		statistics: {
			countries: 12,
			languages: 9,
			top_cities: TOP_CITIES.AmericaSul?.length ?? 0,
		},
		top_cities: TOP_CITIES.AmericaSul ?? [],
	},
	{
		name: "Ásia",
		title: "O berço da civilização.",
		description: `A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.`,
		img: {},
		statistics: {
			countries: 49,
			languages: 72,
			top_cities: TOP_CITIES.Asia?.length ?? 0,
		},
		top_cities: TOP_CITIES.Asia ?? [],
	},
	{
		name: "África",
		title: "Cotinente de vasta pluralidade étnica e cultural.",
		description: `A África é o terceiro continente mais extenso do globo e o segundo mais populoso`,
		img: {},
		statistics: {
			countries: 54,
			languages: 1250,
			top_cities: TOP_CITIES.Africa?.length ?? 0,
		},
		top_cities: TOP_CITIES.Africa ?? [],
	},
	{
		name: "Oceania",
		title: "Novíssimo mundo.",
		description: `Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico.`,
		img: {},
		statistics: {
			countries: 16,
			languages: 18,
			top_cities: TOP_CITIES.Oceania?.length ?? 0,
		},
		top_cities: TOP_CITIES.Oceania ?? [],
	},
];

const handler: NextApiHandler<{ continents: Continent | Continent[] }> = function (req, res) {
	if (req.method === "GET") {
		const continent = Array.isArray(req.query.continent) ? req.query.continent[0] : req.query.continent;

		if (continent) {
			for (let i = 0; i < CONTINENTS.length; i++) {
				if (CONTINENTS[i].name === continent) {
					return res.status(200).json({ continents: CONTINENTS[i] });
				}
			}

			return res.status(404).end({});
		} else {
			return res.status(200).json({ continents: CONTINENTS });
		}
	} else {
		return res.status(405).end({});
	}
};

export default handler;
