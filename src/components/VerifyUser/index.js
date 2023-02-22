import { Component } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../Context";
import { Div, H1, P, Img, Button } from "./styledComponent";

export default class VerifyUser extends Component {
  state = {};

  render() {
    return (
      <AppContext>
        {(value) => {
          const { theme } = value;
          return (
            <Div
              mh="100vh"
              d="flex"
              fd="column"
              ai="center"
              jc="center"
              bgColor={theme ? "#e7eaf6" : "#393e46"}
            >
              <Div>
                <H1 ta="center">Employee Portal</H1>
                <Div
                  d="flex"
                  fd="column"
                  ai="center"
                  jc="center"
                  mt="20px"
                  mtMd="70px"
                  fdMd="row"
                  gapMd="20px"
                >
                  <Div>
                    <Img
                      src="https://res.cloudinary.com/dy0mnmvem/image/upload/v1676975269/Employee%20Details%20project/pexels-fauxels-3184405_fukezv.jpg"
                      alt="image"
                      h="180px"
                      w="250px"
                      bRadius="5px"
                      hMd="250px"
                      wMd="330px"
                    />
                  </Div>
                  <Div wMd="330px">
                    <P ta="center" mt="30px" fs="16px" fsMd="18px">
                      Greeting from employee protal!
                    </P>
                    <P ta="center" mt="20px" fs="16px" fsMd="18px">
                      Please verify your account by clicking the below Button
                    </P>
                    <Div d="flex" fd="column" ai="center" mt="30px">
                      <Link to="/">
                        <Button
                          type="button"
                          h="35px"
                          w="80px"
                          fs="15px"
                          fw="500"
                          bst="none"
                          bRadius="4px"
                          bgColor="#53a8b6"
                          color="#ffffff"
                        >
                          Verify
                        </Button>
                      </Link>
                    </Div>
                  </Div>
                </Div>
              </Div>
            </Div>
          );
        }}
      </AppContext>
    );
  }
}
