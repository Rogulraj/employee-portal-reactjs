import { Component } from "react";

import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import Popup from "reactjs-popup";
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

export default class Signup extends Component {
  state = {
    email: "",
    username: "",
    companyName: "",
    dob: "",
    age: "",
    password: "",
    errorMsg: "",
    apiResponse: "",
    apiStatus: requestStatus.initial,
    showPopup: false,
  };

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  onChangeCompanyName = (event) => {
    this.setState({
      companyName: event.target.value,
    });
  };

  onChangeDob = (event) => {
    this.setState({
      dob: event.target.value,
    });
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  closePopup = () => {
    this.setState({
      showPopup: false,
    });
  };

  submitTriggred = async (event) => {
    event.preventDefault();
    this.setState({
      apiStatus: requestStatus.pending,
    });

    const { email, username, companyName, dob, age, password } = this.state;
    const authDetails = { email, username, companyName, dob, age, password };
    const options = {
      method: "POST",
      body: JSON.stringify(authDetails),
      headers: { "Content-Type": "application/json" },
    };
    const url =
      "https://cooperative-ant-suspenders.cyclic.app/api/authentication/signup/express";
    const fetchMethod = await fetch(url, options);

    if (fetchMethod.ok) {
      const response = await fetchMethod.json();

      this.setState({
        apiResponse: response,
        apiStatus: requestStatus.success,
        showPopup: true,
        errorMsg: "",
      });
    } else {
      const error = await fetchMethod.json();
      this.setState({
        apiResponse: "",
        apiStatus: requestStatus.failed,
        errorMsg: error,
      });
    }
  };

  render() {
    const {
      email,
      username,
      companyName,
      dob,
      age,
      password,
      errorMsg,
      apiResponse,
      apiStatus,
      showPopup,
    } = this.state;

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
              p="30px"
            >
              <Div
                h="780px"
                w="320px"
                hMd="800px"
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
                  ptMd="2px"
                  color={theme ? "#000000" : "#ffffff"}
                >
                  SIGNUP
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
                        htmlFor="e-mail"
                        d="block"
                        mb="3px"
                        fs="15px"
                        fsMd="17px"
                        ffa="Roboto"
                        fw="500"
                        color={theme ? "#000000" : "#ffffff"}
                      >
                        EMAIL-ID
                      </Label>
                      <Input
                        placeholder="email"
                        onChange={this.onChangeEmail}
                        value={email}
                        signin
                        type="email"
                        id="e-mail"
                        mb="20px"
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
                        mb="20px"
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
                        htmlFor="companyName"
                        d="block"
                        mb="3px"
                        fs="15px"
                        fsMd="17px"
                        ffa="Roboto"
                        fw="500"
                        color={theme ? "#000000" : "#ffffff"}
                      >
                        COMPANY NAME
                      </Label>
                      <Input
                        placeholder="comapny name"
                        onChange={this.onChangeCompanyName}
                        value={companyName}
                        type="text"
                        id="companyName"
                        mb="20px"
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
                        htmlFor="dob"
                        d="block"
                        mb="3px"
                        fs="15px"
                        fsMd="17px"
                        ffa="Roboto"
                        fw="500"
                        color={theme ? "#000000" : "#ffffff"}
                      >
                        DATE OF BIRTH
                      </Label>
                      <Input
                        placeholder="date of birth"
                        onChange={this.onChangeDob}
                        value={dob}
                        type="date"
                        id="dob"
                        mb="20px"
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
                        cursor="pointer"
                      />
                      <Label
                        htmlFor="age"
                        d="block"
                        mb="3px"
                        fs="15px"
                        fsMd="17px"
                        ffa="Roboto"
                        fw="500"
                        color={theme ? "#000000" : "#ffffff"}
                      >
                        AGE
                      </Label>
                      <Input
                        placeholder="age"
                        onChange={this.onChangeAge}
                        value={age}
                        type="number"
                        id="age"
                        mb="20px"
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
                        <P color="red" fs="12px" ffa="Roboto" h="0px">
                          *{errorMsg}
                        </P>
                      )}

                      <Button
                        type="submit"
                        d="block"
                        mt="50px"
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
                        plMd="123px"
                        color={theme ? "#000000" : "#ffffff"}
                      >
                        or
                      </P>
                      <Link to="/">
                        <P
                          pl="108px"
                          plMd="110px"
                          color={theme ? "#000000" : "#ffffff"}
                        >
                          Login
                        </P>
                      </Link>

                      <Popup
                        open={showPopup}
                        onClose={this.closePopup}
                        overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                      >
                        <Div
                          h="120px"
                          w="250px"
                          hMd="150px"
                          wMd="300px"
                          bgColor="#ffffff"
                          bRadius="10px"
                          p="20px"
                          bShadow="0px 1px 16px 1px #303030"
                        >
                          <Button
                            type="button"
                            onClick={this.closePopup}
                            fw="600"
                            bst="none"
                            bgColor="transparent"
                          >
                            {" "}
                            X{" "}
                          </Button>

                          <P ta="center" fs="18px" fsMd="21px">
                            {apiResponse}
                          </P>
                        </Div>
                      </Popup>
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
