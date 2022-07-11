import { Box, Container, Flex, Heading, SimpleGrid, Image, Text, Avatar } from "@chakra-ui/react";
import { ITopCity } from "../../../types";

export function TopCities({ topCities }: { topCities: ITopCity[] }) {
	return (
		<Box as="section">
			<Container maxW="container.xl">
				<Heading fontWeight="medium" size="xl">
					Cidades +100
				</Heading>
				<SimpleGrid minChildWidth="256px" spacing="14" my="10">
					{topCities.map((city, i) => (
						<TopCityCard key={city.name.split(" ").join("") + i} city={city} />
					))}
				</SimpleGrid>
			</Container>
		</Box>
	);
}

const TopCityCard = ({ city }: { city: ITopCity }) => (
	<Flex direction="column" maxW="72">
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
