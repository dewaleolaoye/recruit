import {
  Stack,
  HStack,
  VStack,
  Input,
  FormControl,
  FormLabel,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import styles from "../Overview/Overview.module.scss";

const Company = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.header}>
        <img
          src="https://cloudinary-res.cloudinary.com/image/upload/dpr_2.0,c_scale,f_auto,q_auto,w_156/cloudinary_logo_for_white_bg.svg"
          alt="cloudinary"
        />
      </div>

      <div className={styles.info}>
        <Tabs variant="enclosed" mt="10">
          <TabList justifyContent="center">
            <Tab>Applicants</Tab>
            <Tab>Post a new job</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>First Name: Adewale Olaoye</p>
              <p>Last Name: Adewale Olaoye</p>
              <p>Email: Adewale Olaoye</p>
              <p>Resume:</p>
              <img
                src="https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/90a444a6-3c23-4187-b6b0-9a9799fbd22c.svg"
                alt="adewale"
              />
            </TabPanel>

            <TabPanel>
              <p>
                {" "}
                <Stack spacing="6">
                  <HStack>
                    <FormControl>
                      <FormLabel>Job Title</FormLabel>
                      <Input
                        w="100%"
                        type="text"
                        isRequired
                        placeholder="Backend Developer"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Description</FormLabel>
                      <Input
                        w="100%"
                        type="email"
                        isRequired
                        placeholder="Description"
                      />
                    </FormControl>
                  </HStack>

                  <VStack>
                    <FormControl>
                      <FormLabel>Location</FormLabel>
                      <Input
                        w="100%"
                        type="email"
                        isRequired
                        placeholder="Email"
                      />
                    </FormControl>
                  </VStack>

                  <Button type="submit">Submit</Button>
                </Stack>
              </p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Company;
