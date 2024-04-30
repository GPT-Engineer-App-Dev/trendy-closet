import { Box, Flex, Heading, Text, Image, Button, SimpleGrid, Icon } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="xl">Clothing Store</Heading>
        <Button leftIcon={<Icon as={FaShoppingCart} />} colorScheme="teal" variant="solid">
          Cart
        </Button>
      </Flex>
      <Text fontSize="xl" mt={4} mb={2}>Featured Products</Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          <Image src="https://via.placeholder.com/150" alt="Product 1" />
          <Text mt={2}>Product 1</Text>
          <Text fontSize="sm">Description of product 1.</Text>
          <Button mt={4} colorScheme="blue">Add to Cart</Button>
        </Box>
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          <Image src="https://via.placeholder.com/150" alt="Product 2" />
          <Text mt={2}>Product 2</Text>
          <Text fontSize="sm">Description of product 2.</Text>
          <Button mt={4} colorScheme="blue">Add to Cart</Button>
        </Box>
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          <Image src="https://via.placeholder.com/150" alt="Product 3" />
          <Text mt={2}>Product 3</Text>
          <Text fontSize="sm">Description of product 3.</Text>
          <Button mt={4} colorScheme="blue">Add to Cart</Button>
        </Box>
      </SimpleGrid>
      <Text fontSize="xl" mt={10} mb={2}>Categories</Text>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          <Image src="https://via.placeholder.com/100" alt="Category 1" />
          <Text mt={2}>Category 1</Text>
        </Box>
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          <Image src="https://via.placeholder.com/100" alt="Category 2" />
          <Text mt={2}>Category 2</Text>
        </Box>
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          <Image src="https://via.placeholder.com/100" alt="Category 3" />
          <Text mt={2}>Category 3</Text>
        </Box>
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          <Image src="https://via.placeholder.com/100" alt="Category 4" />
          <Text mt={2}>Category 4</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Index;