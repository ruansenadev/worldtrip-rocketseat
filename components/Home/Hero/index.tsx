import { Box, Container, Fade, Heading, SlideFade, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Airplane } from "../../icons/Airplane";

export function Hero() {
	const [title, setTitle] = useState<boolean>(false);
	const [subtitle, setSubtitle] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setTitle(true);
			setTimeout(() => {
				setSubtitle(true);
			}, 2000);
		}, 1500);
	}, []);

	return (
		<Box as="section" color="white" backgroundImage="url(hero_background.jpg)" backgroundPosition="50% 35%" backgroundRepeat="no-repeat">
			<Container maxW="container.xl">
				<Box pos="relative" py="20">
					<Box maxW="md">
						<Fade in={title}>
							<Heading fontWeight="medium" lineHeight="1.5" mb="5">
								5 continentes,
								<br /> infinitas possibilidades.
							</Heading>
						</Fade>
						<SlideFade in={subtitle} offsetY={0} offsetX={-40}>
							<Text lineHeight="1.9">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
						</SlideFade>
					</Box>
					<Box pos="absolute" bottom="0" right="0">
						<Airplane />
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
