import { NextApiHandler } from "next";
import { IContinent, Countries, TopCities } from "../../utils/types";


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

const CONTINENTS: IContinent[] = [
	{
		name: "Europa",
		title: "O continente mais antigo.",
		description: `A Europa ??, por conven????o, um dos seis continentes do mundo. Compreendendo a pen??nsula ocidental da Eur??sia, a Europa geralmente divide-se da ??sia a leste pela divis??ria de ??guas dos montes Urais, o rio Ural, o mar C??spio, o C??ucaso, e o mar Negro a sudeste.`,
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
		name: "Am??rica do Norte",
		title: "A Am??rica desenvolvida.",
		description: `A Am??rica do Norte ?? um subcontinente que compreende a por????o setentrional do continente americano.`,
		img: {},
		statistics: {
			countries: 4,
			languages: 6,
			top_cities: TOP_CITIES.AmericaNorte?.length ?? 0,
		},
		top_cities: TOP_CITIES.AmericaNorte ?? [],
	},
	{
		name: "Am??rica do Sul",
		title: "Am??rica tropical.",
		description: `A Am??rica do Sul ?? um continente que compreende a por????o meridional da Am??rica. Tamb??m ?? considerada um subcontinente do continente americano.`,
		img: {},
		statistics: {
			countries: 12,
			languages: 9,
			top_cities: TOP_CITIES.AmericaSul?.length ?? 0,
		},
		top_cities: TOP_CITIES.AmericaSul ?? [],
	},
	{
		name: "??sia",
		title: "O ber??o da civiliza????o.",
		description: `A ??sia ?? o maior dos continentes, tanto em ??rea como em popula????o. Abrange um ter??o das partes s??lidas da superf??cie da Terra e ?? respons??vel por abrigar quase tr??s quintos da popula????o mundial.`,
		img: {},
		statistics: {
			countries: 49,
			languages: 72,
			top_cities: TOP_CITIES.Asia?.length ?? 0,
		},
		top_cities: TOP_CITIES.Asia ?? [],
	},
	{
		name: "??frica",
		title: "Cotinente de vasta pluralidade ??tnica e cultural.",
		description: `A ??frica ?? o terceiro continente mais extenso do globo e o segundo mais populoso`,
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
		title: "Nov??ssimo mundo.",
		description: `Oceania ou Oce??nia ?? uma regi??o geogr??fica composta por v??rios grupos de ilhas do oceano Pac??fico.`,
		img: {},
		statistics: {
			countries: 16,
			languages: 18,
			top_cities: TOP_CITIES.Oceania?.length ?? 0,
		},
		top_cities: TOP_CITIES.Oceania ?? [],
	},
];

const handler: NextApiHandler<{ continents: IContinent | IContinent[] }> = function (req, res) {
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
