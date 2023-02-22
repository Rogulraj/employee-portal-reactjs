import { Div, H1, Button } from "./styledComponent";

import { Link } from "react-router-dom";

const FailedLogin = () => (
  <Div mh="100vh" d="flex" fd="column" ai="center" jc="center">
    <Div
      h="80px"
      w="320px"
      hMd="100px"
      wMd="700px"
      d="flex"
      fd="column"
      ai="center"
      jc="center"
      mb="20px"
    >
      <H1
        ta="center"
        fsMd="33px"
        fs="22px"
        color="#000000"
        ffa="Ubuntu"
        fw="600"
      >
        Sorry we cannot log you in !!!
      </H1>
      <Div>
        <Link to="/">
          <Button
            type="button"
            color="#ffffff"
            bgColor="blue"
            fw="600"
            fs="15px"
            h="40px"
            w="90px"
            bRadius="4px"
            bst="none"
          >
            Back
          </Button>
        </Link>
      </Div>
    </Div>
  </Div>
);

export default FailedLogin;
