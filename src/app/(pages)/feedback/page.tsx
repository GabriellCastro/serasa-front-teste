"use client";

import { FC, useState } from "react";
import { Header } from "@/app/components/Header";
import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Rating } from "react-simple-star-rating";
import { Input } from "@/app/components/Input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import Loading from "@/app/components/Loading";

const Feedback: FC = () => {
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const handleRating = (rate: any) => {
    setRating(rate);
  };

  const handleSendFeedback = () => {
    console.log(watch("name"));
    if (watch("name") === "" || watch("name") === undefined) {
      toast({
        title: "Erro",
        description: "Preencha o campo nome",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      router.push("/feedback/review-submitted");
      setIsLoading(false);
    }, 3000);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <Header />
      <Container
        maxW={"container.sm"}
        mt={10}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Text
          as={"h1"}
          fontSize={"3xl"}
          fontWeight={"400"}
          lineHeight={"normal"}
          w={["350px", "100%"]}
        >
          Conte para gente quão satisfeito você está com os nossos serviços.
        </Text>
        <Text
          fontSize={"md"}
          fontWeight={"regular"}
          lineHeight={"normal"}
          mt={8}
        >
          Avalie de 1 á 5 estrelas
        </Text>
        <Flex justifyContent={"center"} mt={6} w={"100%"} h={"100%"}>
          <Rating
            size={50}
            transition
            onClick={handleRating}
            fillColorArray={[
              "#f17a45",
              "#f19745",
              "#f1a545",
              "#f1b345",
              "#f1d045",
            ]}
            emptyColor={"#e0e0e0"}
            emptyStyle={{
              display: "inline-flex",
            }}
            SVGstyle={{
              display: "inline-flex",
            }}
          />
        </Flex>
        <HStack
          display={"flex"}
          justifyContent={"center"}
          mt={8}
          w={"90%"}
          h={"100%"}
          flexDirection={"column"}
          mx={"20"}
          spacing={8}
        >
          <Input
            label="Nome"
            h={"42px"}
            {...register("name")}
            onChange={(e) => setValue("name", e.target.value)}
          />
          <FormControl>
            <FormLabel
              mb={2}
              color={"black"}
              fontSize={"16px"}
              fontWeight={"500"}
            >
              Comentário (opcional)
            </FormLabel>
            <Textarea
              h={"150px"}
              w={"100%"}
              borderColor={"brand.borderColors.400"}
              borderRadius={"8px"}
              {...register("comment")}
              onChange={(e) => setValue("comment", e.target.value)}
            />
          </FormControl>
        </HStack>
        <Button
          w={"90%"}
          h={"48px"}
          mt={20}
          bg={"brand.primary.500"}
          color={"brand.text.100"}
          _hover={{ bg: "brand.primary.900" }}
          onClick={handleSendFeedback}
        >
          Enviar avaliação
        </Button>
      </Container>
    </>
  );
};

export default Feedback;
