import { Box, Container, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BackArrow } from "../icons/BackArrow";
import { Logo } from "../icons/Logo";

interface HeaderProps {
	useBack?: boolean;
	backPath?: string;
}

export function Header({ useBack, backPath }: HeaderProps) {
	const router = useRouter();

	return (
		<Box as="header" h="24">
			<Container maxW="container.xl" h="full">
				<Box as="nav" pos="relative" h="full" display="flex" justifyContent="center" alignItems="center">
					{useBack && (
						<IconButton
							aria-label="voltar"
							variant="link"
							icon={<BackArrow />}
              d="inline-flex"
							pos="absolute"
							left="0"
              p="4"
							onClick={() => router.push(backPath ?? "/")}
						/>
					)}

					<Logo />
				</Box>
			</Container>
		</Box>
	);
}
