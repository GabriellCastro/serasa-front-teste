"use client";

import { usePathname, useRouter } from "next/navigation";
import { FC, useEffect } from "react";

const Home: FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      router.push("/feedback");
    }
  }, [pathname]);

  return <div />;
};

export default Home;
