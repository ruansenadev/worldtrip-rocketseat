import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Text, SimpleGrid, Stack, Tooltip, Fade, ScaleFade, SlideFade } from "@chakra-ui/react";
import { useRef } from "react";
import { useScrollSpot } from "../../../utils/hooks";
import { IContinent } from "../../../utils/types";

export function Info({ continent }: { continent: IContinent }) {
	const textRef = useRef(null);
	const slideText = useScrollSpot(textRef, .2);
	const statisticsRef = useRef<HTMLDivElement[] | null[]>([]);
	const fadeStatistics = useScrollSpot(statisticsRef, 0.7);

	return (
		<Box as="section" my="20">
			<Container maxW="container.xl">
				<SimpleGrid columns={[1, null, 2]} spacing={[12, 4, 8]}>
					<SlideFade in={slideText[0]} offsetY={0} offsetX={-100}>
						<Text ref={textRef} textAlign="justify" fontSize="2xl">
							{continent.description}
						</Text>
					</SlideFade>
					<Flex alignItems="center" justify="center">
						<Stack direction={["column", "row"]} spacing="10">
							<ScaleFade ref={(el) => (statisticsRef.current[0] = el)} initialScale={0.7} in={fadeStatistics[0]}>
								<Box textAlign="center" fontWeight="semibold">
									<Text fontSize="5xl" color="Highlight">
										{continent.statistics.countries}
									</Text>
									<Text fontSize="2xl">países</Text>
								</Box>
							</ScaleFade>
							<ScaleFade ref={(el) => (statisticsRef.current[1] = el)} initialScale={0.7} in={fadeStatistics[1]}>
								<Box textAlign="center" fontWeight="semibold">
									<Text fontSize="5xl" color="Highlight">
										{continent.statistics.languages}
									</Text>
									<Text fontSize="2xl">línguas</Text>
								</Box>
							</ScaleFade>
							{!!continent.statistics.top_cities && (
								<ScaleFade ref={(el) => (statisticsRef.current[2] = el)} initialScale={0.7} in={fadeStatistics[2]}>
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
								</ScaleFade>
							)}
						</Stack>
					</Flex>
				</SimpleGrid>
			</Container>
		</Box>
	);
}
