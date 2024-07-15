import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { getSuperHeroDataById } from "./services";
import { SUPERHEROIDS } from "./mock";
import Layout from "./Layout";
import Search from "./containers/Search";
import Profile from "./containers/Profile";
import Error from "./containers/Error";

function App() {
  const [heros, setHeros] = useState([]);
  const [filter, setFilter] = useState({});
  const [selectedHero, seSelectedHero] = useState();

  const handleQuery = (query) => {
    setFilter((prev) => ({ ...prev, ...query }));
  };
  const handleClickCard = (hero) => {
    seSelectedHero(hero);
  };
  const fetchSuperHeroData = async (ids) => {
    const promises = ids.map((id) => getSuperHeroDataById(id));
    try {
      const results = await Promise.all(promises);
      setHeros(() => [...results]);
    } catch (error) {
      console.error("An error occurred while fetching superhero data:", error);
    }
  };

  useEffect(() => {
    fetchSuperHeroData(SUPERHEROIDS);
  }, []);

  const filteredHeros = useMemo(() => {
    const keyValuePairArr = Object.entries(filter).map((query) => {
      let [feature, property] = query[0].split("_");
      let value = query[1];
      return { feature, property, value };
    });
    const filteredArr = heros.filter((hero) => {
      return keyValuePairArr.every(
        ({ feature, property, value }) => value === hero[feature][property]
      );
    });

    return filteredArr;
  }, [filter, heros]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Search
                  heros={filteredHeros}
                  setQuery={handleQuery}
                  clickCard={handleClickCard}
                />
              }
            />
            <Route
              path="search"
              element={
                <Search
                  heros={filteredHeros}
                  setQuery={handleQuery}
                  clickCard={handleClickCard}
                />
              }
            />
            <Route path="detail" element={<Profile hero={selectedHero} />} />
            <Route path="*" element={<Error />} />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//
export default App;
