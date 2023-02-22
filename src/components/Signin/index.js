import { Component } from "react";

import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import AppContext from "../../Context";

import { MdOutlineLightMode } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";

import { Div, H1, P, Input, Hr, Button, Form, Label } from "./styledComponent";

const requestStatus = {
  initial: "INITITAL",
  pending: "PENDING",
  success: "SUCCESS",
  failed: "FAILED",
};

export default class Signin extends Component {
  state = {
    username: "",
    password: "",
    errorMsg: "",
    apiStatus: requestStatus.initial,
  };

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  submitTriggred = async (event) => {
    event.preventDefault();
    this.setState({
      apiStatus: requestStatus.pending,
    });
    const { username, password } = this.state;
    const authDetails = { username, password };
    const options = {
      method: "POST",
      body: JSON.stringify(authDetails),
      headers: { "Content-Type": "application/json" },
    };
    const url =
      "https://cooperative-ant-suspenders.cyclic.app/api/authentication/signin/express";
    const fetchMethod = await fetch(url, options);

    if (fetchMethod.ok) {
      const response = await fetchMethod.json();
      const jwtToken = response.jwt;

      Cookies.set("jwt_token", jwtToken, { expires: 1 });

      this.setState({
        apiStatus: requestStatus.success,
        errorMsg: "",
      });

      const { history } = this.props;
      history.push("/success/login");
    } else {
      const error = await fetchMethod.json();
      this.setState({
        apiStatus: requestStatus.failed,
        errorMsg: error,
      });
      const { history } = this.props;
      history.push("/failed/login");
    }
  };

  render() {
    const { username, password, errorMsg, apiStatus } = this.state;

    return (
      <AppContext.Consumer>
        {(value) => {
          const { theme, setTheme } = value;

          return (
            <Div
              mh="100vh"
              bgColor={theme ? "#ffffff" : "#222831"}
              d="flex"
              fd="column"
              ai="center"
              jc="center"
            >
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
                  color={theme ? "#000000" : "#ffffff"}
                  ffa="Ubuntu"
                  fw="600"
                >
                  Welcome To Employee Portal
                </H1>
              </Div>
              <Div
                h="460px"
                w="320px"
                hMd="500px"
                wMd="700px"
                bgColor={theme ? "#e7eaf6" : "#393e46"}
                bRadius="10px"
                bShadow={
                  theme
                    ? "1px 1px 10px 1px #bfbfbf"
                    : "1px 1px 10px 1px #121212"
                }
              >
                <Div
                  d="flex"
                  fd="row"
                  jc="end"
                  mt="20px"
                  mr="10px"
                  mtMd="20px"
                  mrMd="20px"
                >
                  <Button
                    type="button"
                    bst="none"
                    bgColor="transparent"
                    onClick={setTheme}
                  >
                    {theme ? (
                      <MdOutlineLightMode size={23} cursor="pointer" />
                    ) : (
                      <BsMoonStarsFill
                        size={23}
                        color="#ffffff"
                        cursor="pointer"
                      />
                    )}
                  </Button>
                </Div>

                <H1
                  ffa="Roboto"
                  fsMd="30px"
                  fs="25px"
                  fw="600"
                  ta="center"
                  pt="10px"
                  ptMd="30px"
                  color={theme ? "#000000" : "#ffffff"}
                >
                  SIGNIN
                </H1>
                <Hr
                  h="2px"
                  w="100px"
                  bgColor={theme ? "#000000" : "#ffffff"}
                  mt="-15px"
                  hMd="2px"
                  wMd="120px"
                  bgColorMd={theme ? "#000000" : "#ffffff"}
                  mtMd="-15px"
                  bts="none"
                />
                <Div d="flex" fd="column" ai="center" jc="center">
                  <Form onSubmit={this.submitTriggred} h="300px" w="310px">
                    <Div pl="25px" pt="20px">
                      <Label
                        htmlFor="username"
                        d="block"
                        mb="3px"
                        fs="15px"
                        fsMd="17px"
                        ffa="Roboto"
                        fw="500"
                        color={theme ? "#000000" : "#ffffff"}
                      >
                        USER NAME
                      </Label>
                      <Input
                        placeholder="name"
                        onChange={this.onChangeUsername}
                        value={username}
                        type="text"
                        id="username"
                        mb="25px"
                        h="35px"
                        w="250px"
                        bst="none"
                        bShadow={
                          theme
                            ? "0px 1px 3px 1px #bfbfbf"
                            : "1px 1px 10px 1px #303030"
                        }
                        bRadius="3px"
                        pl="15px"
                        color="#000000"
                      />
                      <Label
                        htmlFor="password"
                        d="block"
                        mb="3px"
                        fs="15px"
                        fsMd="17px"
                        ffa="Roboto"
                        fw="500"
                        color={theme ? "#000000" : "#ffffff"}
                      >
                        PASSWORD
                      </Label>
                      <Input
                        placeholder="password"
                        onChange={this.onChangePassword}
                        value={password}
                        type="password"
                        id="password"
                        h="35px"
                        w="250px"
                        bst="none"
                        bShadow={
                          theme
                            ? "0px 1px 3px 1px #bfbfbf"
                            : "1px 1px 10px 1px #303030"
                        }
                        bRadius="3px"
                        pl="15px"
                        color="#000000"
                      />

                      {errorMsg === "" ? null : (
                        <P
                          color="red"
                          fs="12px"
                          ffa="Roboto"
                          h="0px"
                          mb="-20px"
                        >
                          *{errorMsg}
                        </P>
                      )}

                      <Button
                        type="submit"
                        d="block"
                        mt="40px"
                        ml="86px"
                        bgColor="#53a8b6"
                        bst="none"
                        color="#ffffff"
                        h="37px"
                        w="90px"
                        bRadius="4px"
                        fs="15px"
                        fw="500"
                        ffa="Roboto"
                      >
                        {apiStatus === requestStatus.pending ? (
                          <Div d="flex" fd="column" ai="center" jc="center">
                            <TailSpin color="#ffffff" height={18} width={18} />
                          </Div>
                        ) : (
                          "Submit"
                        )}
                      </Button>
                      <P
                        pl="120px"
                        plMd="121px"
                        color={theme ? "#000000" : "#ffffff"}
                      >
                        or
                      </P>
                      <Link to="/signup">
                        <P
                          pl="75px"
                          plMd="75px"
                          color={theme ? "#000000" : "#ffffff"}
                        >
                          Create Account
                        </P>
                      </Link>
                    </Div>
                  </Form>
                </Div>
              </Div>
            </Div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}
