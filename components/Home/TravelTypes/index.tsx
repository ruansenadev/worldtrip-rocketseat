import { Box, Container, Divider, Grid, GridItem, Image, Text, TextProps } from "@chakra-ui/react";

export function TravelTypes() {
	return (
		<Box as="section">
			<Container maxW="container.xl">
				<Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", null, "repeat(5, 1fr)"]} gap={[6]} py="20">
					<GridItem textAlign="center">
						<Image mx="auto" src="cocktail.svg" alt="Coquetel" />
						<TravelTypesText>
							vida noturna
						</TravelTypesText>
					</GridItem>
					<GridItem textAlign="center">
						<Image mx="auto" src="surf.svg" alt="Prancha e Sol" />
						<TravelTypesText>
							praia
						</TravelTypesText>
					</GridItem>
					<GridItem textAlign="center" order={[-1, null, null, 0]} colSpan={[null, 2, null, "auto"]}>
						<Image mx="auto" src="building.svg" alt="Edifício" />
						<TravelTypesText>
							moderno
						</TravelTypesText>
					</GridItem>
					<GridItem textAlign="center">
						<Image mx="auto" src="museum.svg" alt="Museu" />
						<TravelTypesText>
							clássico
						</TravelTypesText>
					</GridItem>
					<GridItem textAlign="center">
						<Image mx="auto" src="earth.svg" alt="Globo" />
						<TravelTypesText>
							e mais...
						</TravelTypesText>
					</GridItem>
				</Grid>
			</Container>

			<Divider w="24" borderBottomWidth="3px" mx="auto" borderColor="Dark" opacity="1" />
		</Box>
	);
}

const TravelTypesText = (props: TextProps) => (
	<Text mt={[4, null, 6]} whiteSpace="nowrap" fontSize="2xl" fontWeight="medium">
		{props.children}
	</Text>
);
