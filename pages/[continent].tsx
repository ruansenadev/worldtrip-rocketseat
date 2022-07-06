import {
	Box,
	Container,
	Flex,
	Heading,
	Icon,
	IconButton,
	IconProps,
	LinkBox,
	LinkOverlay,
	SimpleGrid,
	Stack,
	Text,
	Tooltip,
	Image,
	Avatar,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Logo } from ".";
import { Continent } from "./types";

interface ContinenteProps {
	continent: Continent;
}

const Continente: NextPage<ContinenteProps> = ({ continent }) => {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Worldtrip - {continent.name}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box as="header" h="24">
				<Container maxW="container.xl" h="full">
					<Box as="nav" pos="relative" h="full" display="flex" justifyContent="center" alignItems="center">
						<IconButton aria-label="voltar" variant="link" icon={<BackIcon />} pos="absolute" left="0" onClick={() => router.push("/")} />

						<LinkBox as="h1">
							<LinkOverlay href="/">
								<Logo />
							</LinkOverlay>
						</LinkBox>
					</Box>
				</Container>
			</Box>

			<Box
				as="section"
				backgroundImage="url(continents/europe-background.jpg)"
				backgroundSize="cover"
				backgroundPosition="center"
				backgroundRepeat="no-repeat"
				color="Light"
			>
				<Container maxW="container.xl">
					<Flex height={["sm", "md", "lg"]} py={[6, null, 10, 16]} alignItems="flex-end">
						<Heading fontWeight="semibold" size="2xl">
							{continent.name}
						</Heading>
					</Flex>
				</Container>
			</Box>

			<Box as="section" my="20">
				<Container maxW="container.xl">
					<SimpleGrid columns={[1, null, 2]} spacing={[12, 4, 8]}>
						<Text textAlign="justify" fontSize="2xl">
							{continent.description}
						</Text>
						<Flex alignItems="center" justify="center">
							<Stack direction={["column", "row"]} spacing="10">
								<Box textAlign="center" fontWeight="semibold">
									<Text fontSize="5xl" color="Highlight">
										{continent.statistics.countries}
									</Text>
									<Text fontSize="2xl">países</Text>
								</Box>
								<Box textAlign="center" fontWeight="semibold">
									<Text fontSize="5xl" color="Highlight">
										{continent.statistics.languages}
									</Text>
									<Text fontSize="2xl">línguas</Text>
								</Box>
								{!!continent.statistics.top_cities && (
									<Box textAlign="center" fontWeight="semibold">
										<Text fontSize="5xl" color="Highlight">
											{continent.statistics.top_cities}
										</Text>
										<Text fontSize="2xl">
											cidades +100
											<Box as="span" pl="1.5">
												<Tooltip
													fontSize="md"
													label="As cidades +100 são as cidades que o continente possui que estão entre as 100 cidades mais visitadas do mundo."
												>
													<InfoOutlineIcon fontSize="lg" opacity=".5" />
												</Tooltip>
											</Box>
										</Text>
									</Box>
								)}
							</Stack>
						</Flex>
					</SimpleGrid>
				</Container>
			</Box>

			<Box as="section">
				<Container maxW="container.xl">
					<Heading fontWeight="medium" size="xl">
						Cidades +100
					</Heading>
					<SimpleGrid minChildWidth="256px" spacing="14" my="10">
						{continent.top_cities.map((city, i) => (
							<Flex key={city.name.split(" ").join("") + i} direction="column" maxW="72">
								<Image
									h="175px"
									src={city.background ?? "https://via.placeholder.com/300x200.png?" + new URLSearchParams({ text: city.name })}
									alt={city.name}
                  borderTopRadius="md"
								/>
								<Box p="6" pos="relative"  borderBottomRadius="md" borderColor="rgba(255, 186, 8, .5)" borderWidth="thin" borderTopWidth="0">
									<Text as="h5" fontSize="xl" fontWeight="semibold" mb="3">
										{city.name}
									</Text>
									{city.country && (
										<>
											<Text as="div">{city.country?.name}</Text>
											<Avatar name={city.country?.name} src={city.country?.flag} pos="absolute" boxSize="8" right="6" bottom="calc(50% - 16px)" />
										</>
									)}
								</Box>
							</Flex>
						))}
					</SimpleGrid>
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
	let continentParam = ctx.params?.continent,
		continent;

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

const BackIcon = (props: IconProps) => (
	<Icon viewBox="0 0 10 18" fill="none" {...props}>
		<path d="M9 17L1 9L9 1" stroke="#47585B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</Icon>
);
