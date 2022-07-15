import { Box, Container, Flex, Heading, SimpleGrid, Image, Text, Avatar, Fade } from "@chakra-ui/react";
import { forwardRef, useRef } from "react";
import { useScrollSpot } from "../../../utils/hooks";
import { ITopCity } from "../../../utils/types";

export function TopCities({ topCities }: { topCities: ITopCity[] }) {
	const citiesRef = useRef<HTMLDivElement[] | null[]>([]);
	const fade = useScrollSpot(citiesRef, 175);

	return (
		<Box as="section">
			<Container maxW="container.xl">
				<Heading fontWeight="medium" size="xl">
					Cidades +100
				</Heading>
				<SimpleGrid minChildWidth="256px" spacing="14" my="10">
					{topCities.map((city, i) => (
						<Fade key={city.name.split(" ").join("") + i} in={fade[i]}>
							<TopCity city={city} ref={(el) => (citiesRef.current[i] = el)} />
						</Fade>
					))}
				</SimpleGrid>
			</Container>
		</Box>
	);
}

const TopCity = forwardRef<HTMLDivElement, { city: ITopCity }>(function TopCityCard({ city }, ref) {
	return (
		<Flex ref={ref} direction="column" maxW="72">
			<Image
				h="175px"
				src={city.background ?? "https://via.placeholder.com/300x200.png?" + new URLSearchParams({ text: city.name })}
				alt={city.name}
				borderTopRadius="md"
			/>
			<Box p="6" pos="relative" borderBottomRadius="md" borderColor="rgba(255, 186, 8, .5)" borderWidth="thin" borderTopWidth="0">
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
	);
});
