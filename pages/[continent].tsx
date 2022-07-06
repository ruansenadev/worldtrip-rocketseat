import { Box, Container, Flex, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Logo } from ".";
import { Continent } from "./types";

interface ContinenteProps {
	continent: Continent;
}

const Continente: NextPage<ContinenteProps> = ({ continent }) => {
	return (
		<>
			<Head>
				<title>Worldtrip - {continent.name}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box as="header">
				<Container maxW="container.lg" minH="24" display="flex" justifyContent="center" alignItems="center">
					<LinkBox as="h1">
						<LinkOverlay href="/">
							<Logo />
						</LinkOverlay>
					</LinkBox>
				</Container>
			</Box>

			<Box
				as="section"
				backgroundImage="url(continents/europe-background.jpg)"
				backgroundSize="cover"
				backgroundPosition="center"
				backgroundRepeat="no-repeat"
				color="white"
			>
				<Container maxW="container.lg">
					<Flex height={["sm", "md", "lg"]} py={[6, null, 10, 16]} alignItems="flex-end">
						<Heading fontWeight="semibold" size="2xl">
							{continent.name}
						</Heading>
					</Flex>
				</Container>
			</Box>
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
	let continentParam = ctx.params?.continent, continent;

	if (continentParam) {
		try {
			await fetch("http://localhost:3000/api/continents?" + new URLSearchParams({ continent: continentParam }))
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
	};
};

export default Continente;
