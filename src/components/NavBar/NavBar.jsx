import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";

const NavBar = () => {
  return (
    <Stack alignItems="flex-end" mb="6">
      <Button colorScheme="teal" variant="outline">
        Post a Job
      </Button>
    </Stack>
  );
};

export default NavBar;
