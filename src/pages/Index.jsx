import { Container, Text, VStack, Heading, Box, Image, Link } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = ({ posts }) => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Container centerContent maxW="container.md" py={8} bg={bg} color={color}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-banner.jpg" alt="Blog Banner" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm [Your Name], and this is my personal blog where I share my thoughts, experiences, and stories. 
          Feel free to explore and connect with me through my posts.
        </Text>
        <Link as={RouterLink} to="/add-post" color="teal.500" fontSize="lg">Add a new post</Link>
        {posts.map((post, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%" bg={bg} color={color}>
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.content}</Text>
            {post.image && <Image src={post.image} alt={post.title} mt={4} />}
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;