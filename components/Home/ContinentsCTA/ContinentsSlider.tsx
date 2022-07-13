import { Flex, Heading, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IContinent } from "../../../utils/types";
import Styles from "./styles.module.css";

export function ContinentsSlider({ continents }: { continents: IContinent[] }) {
	return (
		<Swiper className={Styles.swiper} modules={[Pagination, Navigation]} navigation pagination={{ type: "bullets", clickable: true }}>
			{continents.map((continent, i) => (
				<SwiperSlide key={continent.name.split(" ").join("") + i}>
					<Flex
						h="full"
						direction="column"
						align="center"
						justify="center"
						backgroundImage="url(continents/europe-slide.jpg)"
						backgroundPosition="center"
						backgroundSize="cover"
						textAlign="center"
					>
						<LinkBox>
							<Heading as="h3" size="2xl" my="4">
								{continent.name}
							</Heading>
							{continent.title ?? (
								<Text fontSize="2xl" fontWeight="bold">
									{continent.title}
								</Text>
							)}
							<Link href={"/" + continent.name} passHref>
								<LinkOverlay />
							</Link>
						</LinkBox>
					</Flex>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
