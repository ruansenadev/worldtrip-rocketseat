import { Box, Container, Heading, Flex } from "@chakra-ui/react";
import { IContinent } from "../../../types";

export function Hero({ continent }: { continent: IContinent }) {
	return (
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
	);
}
