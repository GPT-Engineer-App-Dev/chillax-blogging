import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { Container, VStack, Heading, Input, Textarea, Button, Image, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, image };
    addPost(newPost);
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={8} bg={bg} color={color}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h2" size="xl">Add New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isRequired
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          isRequired
        />
        <Input type="file" accept="image/*" onChange={handleImageChange} />
        {image && (
          <Box boxSize="sm">
            <Image src={image} alt="Selected" />
          </Box>
        )}
        <Button type="submit" colorScheme="teal" size="md">Submit</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;