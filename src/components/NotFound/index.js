import AppContext from "../../Context/index";

import { Div, Img, H1, P } from "./styledComponent";

const NotFound = () => (
  <AppContext.Consumer>
    {(value) => {
      const { theme } = value;

      return (
        <Div d="flex" fd="column" bgColor={theme ? "#f9f9f9" : "#0f0f0f"}>
          <Div
            grow={1}
            d="flex"
            fd="column"
            ai="center"
            jc="center"
            h="100vh"
            hMd="100vh"
          >
            <Img
              src={
                theme
                  ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                  : "https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
              }
              alt="not found"
              h="200px"
              w="200px"
              hMd="320px"
              wMd="350px"
            />
            <H1
              color={theme ? "#000000" : "#ffffff"}
              fs="20px"
              fsMd="30px"
              fw="500"
            >
              Page Not Found
            </H1>
            <P color="#94a3b8" fs="13px" fsMd="17px" fw="400">
              We are sorry, the page you request could not be found.
            </P>
          </Div>
        </Div>
      );
    }}
  </AppContext.Consumer>
);
export default NotFound;
