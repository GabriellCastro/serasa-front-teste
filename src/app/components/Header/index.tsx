"use client";

import { FC } from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

export const Header: FC = () => {
  return (
    <Box
      w="100%"
      h="124px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={"brand.primary.500"}
    >
      <Image src="/serasa-logo.png" alt="Logo" width={60} height={60} />
    </Box>
  );
};
