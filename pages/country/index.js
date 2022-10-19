import React from "react";
import { useRouter } from "next/dist/client/router";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import ppl from "../../public/img/ppl.png";
import city from "../../public/img/city.png";
import {
  MainDiv,
  Wrapper,
  CardContainer,
  Div1,
  Div2,
  Div2Container,
  ImgContainer,
  DivCol1,
  DivCol2,
  DivCol,
  DivCol1A,
  DivCol1sm,
  DivWrapper,
  ImageWrap,
} from "../../styles/Country.styles";

export default function country() {
  const router = useRouter();

  const {
    query: {
      name,
      official,
      population,
      capital,
      img,
      region,
      weekStart,
      car,
      lang,
    },
  } = router;

  const props = {
    name,
    official,
    population,
    capital,
    img,
    region,
    weekStart,
    car,
    lang,
  };

  return (
    <>
      <Navbar />
      <MainDiv>
        <Wrapper>
          <CardContainer>
            <Div1>
              <ImgContainer>
                <img src={props.img} height={250} width={350}></img>
              </ImgContainer>
            </Div1>
            <Div2>
              <Div2Container>
                <div>
                  <h1>{props.name}</h1>
                </div>
                <DivCol>
                  <DivCol1>
                    <p>
                      {props.name} is located in {props.region}. The country is
                      officially known as {props.official}. The week starts on{" "}
                      {props.weekStart}, cars drive on the {props.car} side of
                      the road and the capital is {props.capital}.
                    </p>
                  </DivCol1>

                  <DivCol2>
                    <DivCol1A>
                      <DivWrapper>
                        <ImageWrap>
                          <Image src={city} height={50} width={50}></Image>
                        </ImageWrap>
                        <DivCol1sm>
                          <h3>Capital</h3>
                          <h5>{props.capital}</h5>
                        </DivCol1sm>
                      </DivWrapper>

                      <DivWrapper>
                        <ImageWrap>
                          <Image src={ppl} height={50} width={50}></Image>
                        </ImageWrap>
                        <DivCol1sm>
                          <h3>Population</h3>
                          <h5>{props.population}</h5>
                        </DivCol1sm>
                      </DivWrapper>
                    </DivCol1A>
                  </DivCol2>
                </DivCol>
              </Div2Container>
            </Div2>
          </CardContainer>
        </Wrapper>
      </MainDiv>
    </>
  );
}
