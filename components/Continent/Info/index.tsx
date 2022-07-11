import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Text, SimpleGrid, Stack, Tooltip } from "@chakra-ui/react";
import { IContinent } from "../../../types";

export function Info({ continent }: { continent: IContinent }) {
	return (
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
	);
}
