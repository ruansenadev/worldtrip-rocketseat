import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { ContinentsCTA } from "../components/Home/ContinentsCTA";
import { Hero } from "../components/Home/Hero";
import { TravelTypes } from "../components/Home/TravelTypes";
import { IContinent } from "../types";

interface HomeProps {
	continents: IContinent[];
}

const Home: NextPage<HomeProps> = ({ continents }) => {
	return (
		<>
			<Head>
				<title>Worldtrip</title>
				<meta name="description" content="React app desenvolvido com interface em ChakraUI, responsivo, layout provido no Figma pela Rocketseat" />
			</Head>

			<Header />

			<Hero />

			<TravelTypes />

			<ContinentsCTA continents={continents} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	let continents: IContinent[] = [];

	try {
		await fetch("http://localhost:3000/api/continents")
			.then((res) => {
				/* let headers = res.headers;
				let contentType = headers.get("content-type");
				console.log(res.status, contentType); */
				return res.json();
			})
			.then((data) => (continents = data.continents))
			.catch((e) => console.log("Fetch erro", e));
	} catch (e) {
		console.log("Algum problema na rede...", e);
	}

	return {
		props: { continents },
	};
};

export default Home;
