import { Box, Container, Divider, Grid, GridItem, Image, ScaleFade, Text, TextProps, useConst } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import usePageScroll from "../../../utils/hooks";

export function TravelTypes() {
	const { scrollViewY } = usePageScroll();
	const items = useRef<HTMLDivElement[] | null[]>([]);
	const animate = useConst<boolean[]>([]);

	useEffect(() => {
		if (items.current[0]) {
			for (let i = 0, offsetTop, offsetHeight; i < items.current.length; i++) {
				if (!animate[i] && items.current[i]) {
					offsetTop = items.current[i]?.offsetTop;
					offsetHeight = Number(items.current[i]?.offsetHeight);
					if (offsetTop && scrollViewY >= offsetTop + offsetHeight) {
						animate[i] = true;
					}
				}
			}
		}
	}, [scrollViewY, items, animate]);

	return (
		<Box as="section">
			<Container maxW="container.xl">
				<Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", null, "repeat(5, 1fr)"]} gap={[6]} py="20">
					<ScaleFade ref={(el) => (items.current[0] = el)} initialScale={0.8} in={animate[0]}>
						<GridItem textAlign="center">
							<Image mx="auto" src="cocktail.svg" alt="Coquetel" />
							<TravelTypesText>vida noturna</TravelTypesText>
						</GridItem>
					</ScaleFade>
					<GridItem textAlign="center">
						<Image mx="auto" src="surf.svg" alt="Prancha e Sol" />
						<TravelTypesText>praia</TravelTypesText>
					</GridItem>
					<GridItem textAlign="center" order={[-1, null, null, 0]} colSpan={[null, 2, null, "auto"]}>
						<Image mx="auto" src="building.svg" alt="Edifício" />
						<TravelTypesText>moderno</TravelTypesText>
					</GridItem>
					<GridItem textAlign="center">
						<Image mx="auto" src="museum.svg" alt="Museu" />
						<TravelTypesText>clássico</TravelTypesText>
					</GridItem>
					<GridItem ref={(el) => (items.current[4] = el)} textAlign="center">
						<Image mx="auto" src="earth.svg" alt="Globo" />
						<TravelTypesText>e mais...</TravelTypesText>
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
