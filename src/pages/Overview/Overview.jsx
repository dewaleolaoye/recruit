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
import styles from "./Overview.module.scss";

const Overview = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.header}>
        <img
          src="https://cloudinary-res.cloudinary.com/image/upload/dpr_2.0,c_scale,f_auto,q_auto,w_156/cloudinary_logo_for_white_bg.svg"
          alt="cloudinary"
        />

        <h1>Senior React Developer</h1>
        <p>Abuja, Federal Capital Territory, Nigeria Full time</p>
      </div>

      <div className={styles.info}>
        <Tabs variant="enclosed" mt="10">
          <TabList justifyContent="center">
            <Tab>Overview</Tab>
            <Tab>Application</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>
                TeleSoftas is a worldwide consulting and software development
                service company, started in 2004 to provide high-end bespoke
                solutions in mobile, big data, FinTech, communications, and
                other sectors.
              </p>
            </TabPanel>

            <TabPanel>
              <p>
                {" "}
                <Stack spacing="6">
                  <HStack>
                    <FormControl>
                      <FormLabel>Firstname</FormLabel>
                      <Input
                        w="100%"
                        type="text"
                        isRequired
                        placeholder="First name"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Lastname</FormLabel>
                      <Input
                        w="100%"
                        type="email"
                        isRequired
                        placeholder="Lastname"
                      />
                    </FormControl>
                  </HStack>

                  <VStack>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input
                        w="100%"
                        type="email"
                        isRequired
                        placeholder="Email"
                      />
                    </FormControl>
                  </VStack>

                  <FormControl>
                    <FormLabel>Phone</FormLabel>
                    <Input
                      w="100%"
                      type="number"
                      isRequired
                      placeholder="Phone number"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Resume</FormLabel>
                    <Input w="100%" type="file" isRequired />
                  </FormControl>

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

export default Overview;
