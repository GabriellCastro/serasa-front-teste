"use client";

import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Box w={"100%"} h={"100%"}>
      {children}
    </Box>
  );
}
