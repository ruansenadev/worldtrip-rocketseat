import { Box, Container, Heading, Flex, ScaleFade } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IContinent } from "../../../utils/types";

export function Hero({ continent }: { continent: IContinent }) {
	const [title, setTitle] = useState(false);

	useEffect(() => {
		setTimeout(() => setTitle(true), 1500);
	}, []);

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
					<ScaleFade initialScale={1.5} in={title}>
						<Heading fontWeight="semibold" size="2xl">
							{continent.name}
						</Heading>
					</ScaleFade>
				</Flex>
			</Container>
		</Box>
	);
}
