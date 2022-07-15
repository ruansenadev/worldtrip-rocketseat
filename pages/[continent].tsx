import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { IContinent } from "../utils/types";
import { Header } from "../components/Header";
import { Hero } from "../components/Continent/Hero";
import { Info } from "../components/Continent/Info";
import { TopCities } from "../components/Continent/TopCities";

interface ContinenteProps {
	continent: IContinent;
}

const Continente: NextPage<ContinenteProps> = ({ continent }) => {
	return (
		<>
			<Head>
				<title>Worldtrip - {continent.name}</title>
			</Head>

			<Header useBack />

			<Hero continent={continent} />

			<Info continent={continent} />

			<TopCities topCities={continent.top_cities} />
		</>
	);
};

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [],
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps<any, { continent: string }> = async (ctx) => {
	let continentParam = ctx.params?.continent,
		continent;

	if (continentParam) {
		try {
			await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/continents?` + new URLSearchParams({ continent: continentParam }))
				.then((res) => {
					/* let headers = res.headers;
          let contentType = headers.get("content-type");
          console.log(res.status, contentType); */
					return res.json();
				})
				.then((data) => (continent = data.continents))
				.catch((e) => console.log("Fetch erro", e));
		} catch (e) {
			console.log("Algum problema na rede...", e);
		}
	}

	if (!continent) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
			props: {},
		};
	}

	return {
		props: { continent },
    revalidate: 5 * 60
	};
};

export default Continente;
