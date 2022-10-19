import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import {
  SearchDiv,
  SearchWrapper,
  Input,
  DataResults,
  SearchContainer,
} from "../styles/Searchbar.styles";

export default function Searchbar({ placeholder, data }) {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  // Function matches input value with list of countries
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.common.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <>
      <SearchDiv>
        <SearchWrapper>
          <h2>Search Countries</h2>
          <SearchContainer>
            <Input
              value={wordEntered}
              type="text"
              placeholder={placeholder}
              onChange={handleFilter}
            ></Input>

            {filteredData.length != 0 && (
              <DataResults>
                {filteredData.slice(0,2).map((value, key) => {
                  return (
                    <a
                    key={value.id}
                      className="dataItem"
                      onClick={() => {
                        router.push({
                          pathname: "/country",
                          query: {
                            img: value.flags.png,
                            name: value.name.common,
                            population:
                              value.population.toLocaleString("en-US"),
                            capital: value.capital,
                            official: value.name.official,
                            region: value.region,
                            weekStart: value.startOfWeek,
                            car: value.car.side,
                          },
                        });
                      }}
                      target="_blank"
                    >
                      {value.name.common}
                    </a>
                  );
                })}
              </DataResults>
            )}
          </SearchContainer>
        </SearchWrapper>
      </SearchDiv>
    </>
  );
}
