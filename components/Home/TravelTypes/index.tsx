import { Box, Container, Divider, Grid, GridItem, Image, ScaleFade, Text, TextProps, useConst } from "@chakra-ui/react";
import { useRef } from "react";
import { useScrollSpot } from "../../../utils/hooks";

export function TravelTypes() {
	const items = useRef<HTMLDivElement[] | null[]>([]);
	const fade = useScrollSpot(items, .7);

	return (
		<Box as="section">
			<Container maxW="container.xl">
				<Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", null, "repeat(5, 1fr)"]} gap={[6]} py="20">
					<GridItem textAlign="center">
						<ScaleFade ref={(el) => (items.current[0] = el)} initialScale={0.8} in={fade[0]}>
							<Image mx="auto" src="cocktail.svg" alt="Coquetel" />
							<TravelTypesText>vida noturna</TravelTypesText>
						</ScaleFade>
					</GridItem>
					<GridItem textAlign="center">
						<ScaleFade ref={(el) => (items.current[1] = el)} initialScale={0.8} in={fade[1]}>
							<Image mx="auto" src="surf.svg" alt="Prancha e Sol" />
							<TravelTypesText>praia</TravelTypesText>
						</ScaleFade>
					</GridItem>
					<GridItem textAlign="center" order={[-1, null, null, 0]} colSpan={[null, 2, null, "auto"]}>
						<ScaleFade ref={(el) => (items.current[2] = el)} initialScale={0.8} in={fade[2]}>
							<Image mx="auto" src="building.svg" alt="Edifício" />
							<TravelTypesText>moderno</TravelTypesText>
						</ScaleFade>
					</GridItem>
					<GridItem textAlign="center">
						<ScaleFade ref={(el) => (items.current[3] = el)} initialScale={0.8} in={fade[3]}>
							<Image mx="auto" src="museum.svg" alt="Museu" />
							<TravelTypesText>clássico</TravelTypesText>
						</ScaleFade>
					</GridItem>
					<GridItem textAlign="center">
						<ScaleFade ref={(el) => (items.current[4] = el)} initialScale={0.8} in={fade[4]}>
							<Image mx="auto" src="earth.svg" alt="Globo" />
							<TravelTypesText>e mais...</TravelTypesText>
						</ScaleFade>
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
