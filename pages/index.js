import { useState } from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Router from "next/dist/client/router";
import {
  Wrapper,
  Card,
  MainDiv,
  Grid,
  Pagination,
  ImgContainer,
  TxtContainer,
  InnerTxtContainer,
  TopContainer,
  Container,
  InnerWrap,
  BottomDiv,
} from "../styles/Home.styles";
import Image from "next/image";
import city from "../public/img/city.png";
import ReactPaginate from "react-paginate";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

export default function Home({ countries }) {
  //  Store list of countries
  const [list, setList] = useState(countries.slice(0, 250));

  // Set page number state for pagination
  const [pageNumber, setPageNumber] = useState(1);

  // "toggle" is being used to display search or grid view
  const [toggle, setToggle] = useState(false);

  // Number of Countries on each page
  const countriesPerPage = 12;

  // Number of countries divided by the countries on that page (rounded up)
  const pageCount = Math.ceil(list.length / countriesPerPage);

  // (Number of Last Item on Page)
  const indexofLastPost = pageNumber * countriesPerPage;

  // (Number of First Item on Page)
  const indexofFirstPost = indexofLastPost - countriesPerPage;

  // Range of posts (16)
  const currentCountries = countries.slice(indexofFirstPost, indexofLastPost);

  const changePage = ({ selected }) => {
    setPageNumber(selected + 1);
  };

  const handleCLick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <MainDiv>
        <Wrapper>
          {toggle ? (
            ""
          ) : (
            <TopContainer>
              <Searchbar
                placeholder="Search"
                data={countries}
                toggle={toggle}
                setToggle={setToggle}
              ></Searchbar>
            </TopContainer>
          )}

          <Container>
            <InnerWrap>
              {toggle ? <h3>World Countries</h3> : ""}
              {toggle ? (
                <Grid>
                  {currentCountries.map((country) => {
                    return (
                      <Card
                        key={country.id}
                        onClick={() => {
                          Router.push({
                            pathname: "/country",
                            query: {
                              img: country.flags.png,
                              name: country.name.common,
                              population:
                                country.population.toLocaleString("en-US"),
                              capital: country.capital,
                              official: country.name.official,
                              region: country.region,
                              weekStart: country.startOfWeek,
                              car: country.car.side,
                            },
                          });
                        }}
                      >
                        <ImgContainer>
                          <img
                            alt="flag_image"
                            src={country.flags.png}
                            width={50}
                            height={50}
                          ></img>
                        </ImgContainer>
                        <TxtContainer>
                          <InnerTxtContainer>
                            <h2>{country.name.common}</h2>
                            <p> Continent: {country.region}</p>
                          </InnerTxtContainer>
                        </TxtContainer>
                      </Card>
                    );
                  })}
                </Grid>
              ) : (
                ""
              )}

              {toggle ? (
                <Pagination>
                  <ReactPaginate
                    previousLabel={<IoIosArrowRoundBack />}
                    nextLabel={<IoIosArrowRoundForward />}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    pageRangeDisplayed={6}
                    breakLabel={null}
                    initialPage={0}
                    marginPagesDisplayed={0}
                    containerClassName={"paginationDiv"}
                    pageClassName={"page"}
                    previousLinkClassName={"next"}
                    nextLinkClassName={"back"}
                    activeClassName={"active"}
                  />
                </Pagination>
              ) : (
                ""
              )}
            </InnerWrap>
          </Container>
          {toggle ? (
            ""
          ) : (
            <BottomDiv>
              <Image src={city} height={25} width={25} alt="city_image"></Image>
              <h3 onClick={handleCLick}>View List of Countries</h3>
            </BottomDiv>
          )}
        </Wrapper>
      </MainDiv>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  return {
    props: { countries: data },
  };
};
