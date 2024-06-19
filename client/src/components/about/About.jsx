import { Box, styled, Typography } from "@mui/material";

const Banner = styled(Box)`
  background-image: url(http://mrtaba.ir/image/bg2.jpg);
  width: 100%;
  height: 30vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">E-Blog Services</Typography>
        <Text variant="h5">
          Welcome to E-Blog Services. Here you can create your own blogs, and
          also view other people's blogs.
        </Text>
        <Text variant="h5">
          If you have great ideas and knowledge which you want to share with the
          world, then our portal is an opportunity for you.
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
