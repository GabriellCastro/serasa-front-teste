"use client";

import { FC } from "react";
import { DotLoader } from "react-spinners";
import { CheckCircle } from "@phosphor-icons/react";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import Image from "next/image";

const ReviewSubmitted: FC = () => {
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
        <Icon as={CheckCircle} color="brand.text.100" fontSize={50} />
        <Text fontSize="2xl" color="brand.text.100" fontWeight="normal" mt={4}>
          Avaliação Enviada
        </Text>
        <Text fontSize="14" color="brand.text.100" fontWeight="normal" mt={2}>
          Obrigado por avaliar nossos serviços
        </Text>
      </Flex>
    </Box>
  );
};

export default ReviewSubmitted;
