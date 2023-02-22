// Style your elements here

import styled from "styled-components";

export const Div = styled.div`
  min-height: ${(props) => props.mh};
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  background-image: url(${(props) => props.bImage});
  background-size: ${(props) => props.bgs};
  background-color: ${(props) => props.bgColor};
  display: ${(props) => props.d};
  flex-direction: ${(props) => props.fd};
  align-items: ${(props) => props.ai};
  justify-content: ${(props) => props.jc};
  border-style: ${(props) => props.bst};
  border-color: ${(props) => props.bColor};
  border-width: ${(props) => props.bw};
  border-radius: ${(props) => props.bRadius};
  padding: ${(props) => props.p};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  box-shadow: ${(props) => props.bShadow};

  @media screen and (min-width: 768px) {
    min-height: ${(props) => props.mhMd};
    height: ${(props) => props.hMd};
    width: ${(props) => props.wMd};
    background-image: ${(props) => props.bImageMd};
    background-color: ${(props) => props.bgColorMd};
    display: ${(props) => props.dMd};
    flex-direction: ${(props) => props.fdMd};
    align-items: ${(props) => props.aiMd};
    justify-content: ${(props) => props.jcMd};
    border-style: ${(props) => props.bstMd};
    border-color: ${(props) => props.bColorMd};
    border-width: ${(props) => props.bwMd};
    border-radius: ${(props) => props.bRadiusMd};
    padding: ${(props) => props.pMd};
    padding-top: ${(props) => props.ptMd};
    padding-bottom: ${(props) => props.pbMd};
    padding-left: ${(props) => props.plMd};
    padding-right: ${(props) => props.prMd};
    margin: ${(props) => props.mMd};
    margin-top: ${(props) => props.mtMd};
    margin-bottom: ${(props) => props.mbMd};
    margin-left: ${(props) => props.mlMd};
    margin-right: ${(props) => props.mrMd};
  }
`;

export const H1 = styled.h1`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  text-align: ${(props) => props.ta};
  padding: ${(props) => props.p};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  font-family: ${(props) => props.ffa};

  @media screen and (min-width: 768px) {
    color: ${(props) => props.colorMd};
    font-size: ${(props) => props.fsMd};
    font-weight: ${(props) => props.fwMd};
    text-align: ${(props) => props.taMd};
    border-style: ${(props) => props.bstMd};
    border-color: ${(props) => props.bColorMd};
    border-width: ${(props) => props.bwMd};
    padding: ${(props) => props.pMd};
    padding-top: ${(props) => props.ptMd};
    padding-bottom: ${(props) => props.pbMd};
    padding-left: ${(props) => props.plMd};
    padding-right: ${(props) => props.prMd};
    margin: ${(props) => props.mMd};
    margin-top: ${(props) => props.mtMd};
    margin-bottom: ${(props) => props.mbMd};
    margin-left: ${(props) => props.mlMd};
    margin-right: ${(props) => props.mrMd};
  }
`;

export const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  padding: ${(props) => props.p};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  font-family: "Roboto";

  @media screen and (min-width: 768px) {
    color: ${(props) => props.colorMd};
    font-size: ${(props) => props.fsMd};
    font-weight: ${(props) => props.fwMd};
    border-style: ${(props) => props.bstMd};
    border-color: ${(props) => props.bColorMd};
    border-width: ${(props) => props.bwMd};
    padding: ${(props) => props.pMd};
    padding-top: ${(props) => props.ptMd};
    padding-bottom: ${(props) => props.pbMd};
    padding-left: ${(props) => props.plMd};
    padding-right: ${(props) => props.prMd};
    margin: ${(props) => props.mMd};
    margin-top: ${(props) => props.mtMd};
    margin-bottom: ${(props) => props.mbMd};
    margin-left: ${(props) => props.mlMd};
    margin-right: ${(props) => props.mrMd};
  }
`;

export const Button = styled.button`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => props.p};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  border-style: ${(props) => props.bst};
  border-color: ${(props) => props.bColor};
  border-width: ${(props) => props.bw};
  border-radius: ${(props) => props.bRadius};
  display: ${(props) => props.d};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    min-height: ${(props) => props.mhMd};
    height: ${(props) => props.hMd};
    width: ${(props) => props.wMd};
    color: ${(props) => props.colorMd};
    font-size: ${(props) => props.fsMd};
    font-weight: ${(props) => props.fwMd};
    background-color: ${(props) => props.bgColorMd};
    border-style: ${(props) => props.bstMd};
    border-color: ${(props) => props.bColorMd};
    border-width: ${(props) => props.bwMd};
    border-radius: ${(props) => props.bRadiusMd};
    padding: ${(props) => props.pMd};
    padding-top: ${(props) => props.ptMd};
    padding-bottom: ${(props) => props.pbMd};
    padding-left: ${(props) => props.plMd};
    padding-right: ${(props) => props.prMd};
    margin: ${(props) => props.mMd};
    margin-top: ${(props) => props.mtMd};
    margin-bottom: ${(props) => props.mbMd};
    margin-left: ${(props) => props.mlMd};
    margin-right: ${(props) => props.mrMd};
  }
`;
export const Img = styled.img`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
`;

export const Hr = styled.hr`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => props.p};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  border-style: ${(props) => props.bst};
  border-color: ${(props) => props.bColor};
  border-width: ${(props) => props.bw};
  border-radius: ${(props) => props.bRadius};
  box-shadow: ${(props) => props.bShadow};

  @media screen and (min-width: 768px) {
    min-height: ${(props) => props.mhMd};
    height: ${(props) => props.hMd};
    width: ${(props) => props.wMd};
    background-color: ${(props) => props.bgColorMd};
    border-style: ${(props) => props.bstMd};
    border-color: ${(props) => props.bColorMd};
    border-width: ${(props) => props.bwMd};
    border-radius: ${(props) => props.bRadiusMd};
    padding: ${(props) => props.pMd};
    padding-top: ${(props) => props.ptMd};
    padding-bottom: ${(props) => props.pbMd};
    padding-left: ${(props) => props.plMd};
    padding-right: ${(props) => props.prMd};
    margin: ${(props) => props.mMd};
    margin-top: ${(props) => props.mtMd};
    margin-bottom: ${(props) => props.mbMd};
    margin-left: ${(props) => props.mlMd};
    margin-right: ${(props) => props.mrMd};
    box-shadow: ${(props) => props.bShadowMd};
  }
`;

export const Input = styled.input`
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => props.p};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  border-style: ${(props) => props.bst};
  border-color: ${(props) => props.bColor};
  border-width: ${(props) => props.bw};
  border-radius: ${(props) => props.bRadius};
  box-shadow: ${(props) => props.bShadow};
  outline: none;

  @media screen and (min-width: 768px) {
    min-height: ${(props) => props.mhMd};
    height: ${(props) => props.hMd};
    width: ${(props) => props.wMd};
    color: ${(props) => props.colorMd};
    font-size: ${(props) => props.fsMd};
    font-weight: ${(props) => props.fwMd};
    background-color: ${(props) => props.bgColorMd};
    border-style: ${(props) => props.bstMd};
    border-color: ${(props) => props.bColorMd};
    border-width: ${(props) => props.bwMd};
    border-radius: ${(props) => props.bRadiusMd};
    padding: ${(props) => props.pMd};
    padding-top: ${(props) => props.ptMd};
    padding-bottom: ${(props) => props.pbMd};
    padding-left: ${(props) => props.plMd};
    padding-right: ${(props) => props.prMd};
    margin: ${(props) => props.mMd};
    margin-top: ${(props) => props.mtMd};
    margin-bottom: ${(props) => props.mbMd};
    margin-left: ${(props) => props.mlMd};
    margin-right: ${(props) => props.mrMd};
    box-shadow: ${(props) => props.bShadowMd};
  }
`;

export const Form = styled.form`
  min-height: ${(props) => props.mh};
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  background-color: ${(props) => props.bgColor};
  border-style: ${(props) => props.bst};
  border-color: ${(props) => props.bColor};
  border-width: ${(props) => props.bw};
  border-radius: ${(props) => props.bRadius};
  padding: ${(props) => props.p};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};

  @media screen and (min-width: 768px) {
    min-height: ${(props) => props.mhMd};
    height: ${(props) => props.hMd};
    width: ${(props) => props.wMd};
    background-color: ${(props) => props.bgColorMd};
    border-style: ${(props) => props.bstMd};
    border-color: ${(props) => props.bColorMd};
    border-width: ${(props) => props.bwMd};
    border-radius: ${(props) => props.bRadiusMd};
    padding: ${(props) => props.pMd};
    padding-top: ${(props) => props.ptMd};
    padding-bottom: ${(props) => props.pbMd};
    padding-left: ${(props) => props.plMd};
    padding-right: ${(props) => props.prMd};
    margin: ${(props) => props.mMd};
    margin-top: ${(props) => props.mtMd};
    margin-bottom: ${(props) => props.mbMd};
    margin-left: ${(props) => props.mlMd};
    margin-right: ${(props) => props.mrMd};
  }
`;

export const Label = styled.label`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  padding: ${(props) => props.p};
  padding-top: ${(props) => props.pt};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  font-family: "Roboto";
  display: ${(props) => props.d};

  @media screen and (min-width: 768px) {
    color: ${(props) => props.colorMd};
    font-size: ${(props) => props.fsMd};
    font-weight: ${(props) => props.fwMd};
    border-style: ${(props) => props.bstMd};
    border-color: ${(props) => props.bColorMd};
    border-width: ${(props) => props.bwMd};
    padding: ${(props) => props.pMd};
    padding-top: ${(props) => props.ptMd};
    padding-bottom: ${(props) => props.pbMd};
    padding-left: ${(props) => props.plMd};
    padding-right: ${(props) => props.prMd};
    margin: ${(props) => props.mMd};
    margin-top: ${(props) => props.mtMd};
    margin-bottom: ${(props) => props.mbMd};
    margin-left: ${(props) => props.mlMd};
    margin-right: ${(props) => props.mrMd};
    display: ${(props) => props.dMd};
  }
`;
