import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Stack alignItems="flex-end" mb="6">
      <Link to="/company">
        <Button colorScheme="teal" variant="outline">
          Post a Job
        </Button>
      </Link>
    </Stack>
  );
};

export default NavBar;
