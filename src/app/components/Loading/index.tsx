"use client";

import { FC } from "react";
import { DotLoader } from "react-spinners";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const Loading: FC = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      flexDirection="column"
      bg={"brand.primary.500"}
    >
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={20}
      >
        <Image src="/serasa-logo.png" alt="Logo" width={72} height={72} />
      </Box>
      <Flex
        direction="column"
        align="center"
        justify="center"
        w="100%"
        h="100vh"
        mt={-40}
      >
        <DotLoader color="white" size={40} />
        <Text fontSize="2xl" color="brand.text.100" fontWeight="normal" mt={4}>
          Aguarde...
        </Text>
        <Text fontSize="14" color="brand.text.100" fontWeight="normal" mt={2}>
          Estamos enviando sua avaliação
        </Text>
      </Flex>
    </Box>
  );
};

export default Loading;
