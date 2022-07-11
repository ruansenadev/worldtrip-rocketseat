import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Airplane } from "../../icons/Airplane";

export function Hero() {
	return (
		<Box as="section" color="white" backgroundImage="url(hero_background.jpg)" backgroundPosition="50% 35%" backgroundRepeat="no-repeat">
			<Container maxW="container.xl">
				<Box pos="relative" py="20">
					<Box maxW="md">
						<Heading fontWeight="medium" lineHeight="1.5" mb="5">
							5 continentes,
							<br /> infinitas possibilidades.
						</Heading>
						<Text lineHeight="1.9">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
					</Box>
					<Box pos="absolute" bottom="0" right="0">
						<Airplane />
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
