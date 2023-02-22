import AppContext from "../../Context";

import Cookies from "js-cookie";
import { TailSpin } from "react-loader-spinner";

import { MdOutlineLightMode } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";

import { Div, H1, P, Button, Img } from "./styledComponent";

import { Component } from "react";
import { Redirect } from "react-router-dom";

const responseStatus = {
  initial: "INITIAL",
  pending: "PENDING",
  success: "SUCCESS",
  failed: "FAILED",
};

export default class SuccessLogin extends Component {
  state = {
    userDetails: {},
    apiStatus: responseStatus.initial,
    errorMsg: "",
  };

  componentDidMount() {
    this.getUserDetails();
  }

  getUserDetails = async () => {
    this.setState({
      apiStatus: responseStatus.pending,
    });
    const url =
      "https://cooperative-ant-suspenders.cyclic.app/api/get/specific-user/express";
    const jwtToken = Cookies.get("jwt_token");

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    const fetchMethod = await fetch(url, options);
    if (fetchMethod.ok) {
      const response = await fetchMethod.json();
      this.setState({
        userDetails: { ...response },
        apiStatus: responseStatus.success,
        errorMsg: "",
      });
    } else {
      const error = await fetchMethod.json();
      this.setState({
        errorMsg: error,
        apiStatus: responseStatus.failed,
      });
    }
  };

  removeAccount = async () => {
    const url =
      "https://cooperative-ant-suspenders.cyclic.app/api/delete/account/express";
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    const fetchMethod = await fetch(url, options);

    if (fetchMethod.ok) {
      const { history } = this.props;
      history.replace("/");
    }
  };

  render() {
    const { userDetails, apiStatus } = this.state;

    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken === undefined) {
      return <Redirect to="/" />;
    }

    return (
      <AppContext.Consumer>
        {(value) => {
          const { theme, setTheme } = value;
          const pendingStatus = () => (
            <Div
              d="flex"
              fd="column"
              ai="center"
              jc="center"
              h="300px"
              hMd="300px"
            >
              <TailSpin height={50} width={50} color="blue" />
            </Div>
          );

          const successStatus = () => {
            const { userDetails } = this.state;
            return (
              <Div d="flex" fd="column" ai="center" jc="center">
                <Img
                  src="https://res.cloudinary.com/dy0mnmvem/image/upload/v1672564084/Employee%20Details%20project/beautiful-women-working-together-startup-company_xkxcmy.jpg"
                  alt="image"
                  hMd="220px"
                  wMd="330px"
                  h="170px"
                  w="270px"
                  bRadius="10px"
                />
                <H1 fs="25px" color={theme ? "#000000" : "#ffffff"}>
                  Account Information
                </H1>
                <Div>
                  <P color={theme ? "#000000" : "#ffffff"}>
                    USERNAME - {userDetails.username}{" "}
                  </P>
                  <P color={theme ? "#000000" : "#ffffff"}>
                    EMAIL - {userDetails.email}
                  </P>
                  <P color={theme ? "#000000" : "#ffffff"}>
                    COMPANYNAME - {userDetails.companyName}
                  </P>
                  <P color={theme ? "#000000" : "#ffffff"}>
                    DATEOFBIRTH - {userDetails.dob}
                  </P>
                  <P color={theme ? "#000000" : "#ffffff"}>
                    AGE - {userDetails.age}
                  </P>
                </Div>
                <Div>
                  <Button
                    type="button"
                    color="#ffffff"
                    bgColor="red"
                    fw="600"
                    fs="15px"
                    h="40px"
                    w="150px"
                    bRadius="4px"
                    bst="none"
                    onClick={this.removeAccount}
                  >
                    Remove Account
                  </Button>
                </Div>
              </Div>
            );
          };

          const conditionalRendering = () => {
            const { apiStatus } = this.state;

            switch (apiStatus) {
              case responseStatus.pending:
                return pendingStatus();
              case responseStatus.success:
                return successStatus();
              default:
                return null;
            }
          };
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
                  Thank you for Logging In,{" "}
                  {apiStatus === responseStatus.success
                    ? userDetails.username
                    : null}
                </H1>
              </Div>
              <Div
                h="550px"
                w="320px"
                hMd="600px"
                wMd="700px"
                bgColor={theme ? "#e7eaf6" : "#393e46"}
                bRadius="10px"
                bShadow={
                  theme
                    ? "1px 1px 10px 1px #bfbfbf"
                    : "1px 1px 10px 1px #121212"
                }
                mb="20px"
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
                {conditionalRendering()}
              </Div>
            </Div>
          );
        }}
      </AppContext.Consumer>
    );
  }
}
