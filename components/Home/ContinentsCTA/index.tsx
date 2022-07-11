import { Box, Container, Heading } from "@chakra-ui/react";
import { IContinent } from "../../../types";
import { ContinentsSlider } from "./ContinentsSlider";

export function ContinentsCTA({ continents }: { continents: IContinent[] }) {
	return (
		<Box as="section" my="10">
			<Container maxW="container.xl">
				<Heading fontWeight="medium" textAlign="center" lineHeight="1.5" my="14">
					Vamos nessa? <br />
					Então escolha seu continente
				</Heading>

				<Box height={["sm", null, "md"]} color="white">
					<ContinentsSlider continents={continents} />
				</Box>
			</Container>
		</Box>
	);
}
