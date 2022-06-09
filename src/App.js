import "./App.css";
import Navbar from "./component/Navbar";
import Input from "./component/input";
import { useState, useEffect } from "react";
import Content from "./component/Content";
import { Routes, Route } from "react-router-dom";
import About from "./component/About";

function App() {
  const [curList, setList] = useState([]);
  // {
  //   id: "bitcoin",
  //   symbol: "btc",
  //   name: "Bitcoin",
  //   image: "",
  //   current_price: 30556,
  //   market_cap: 582845027349,
  //   price_change_percentage_24h: 3.93934
  // },
  // {
  //   id: "bitcoin1",
  //   symbol: "btc",
  //   name: "Bitcoin",
  //   image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  //   current_price: 30556,
  //   market_cap: 582845027349,
  //   price_change_percentage_24h: 3.93934
  // },
  // {
  //   id: "bitcoin2",
  //   symbol: "btc",
  //   name: "Bitcoin",
  //   image: "",
  //   current_price: 30556,
  //   market_cap: 582845027349,
  //   price_change_percentage_24h: -3.93934
  // },
  // {
  //   id: "bitcoin3",
  //   symbol: "btc",
  //   name: "Bitcoin",
  //   image: "",
  //   current_price: 30556,
  //   market_cap: 582845027349,
  //   price_change_percentage_24h: 3.93934
  // },

  const [search, setsearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchItems = () => {
      // try{
      //   const response  = await fetch(`https://jsonplaceholder.typicode.com/${key}`);
      //   const newData= await response.json();
      //   setData(JSON.parse(newData));
      //   console.log(newData);
      // } catch(err) {
      //     console.log(1234);
      // } finally{
      //     console.log("ended");
      // }

      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setList(data);
        });
    };

    fetchItems();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    setsearch(search);
  }

  useEffect(() => {
    const filteredResults = curList.filter((post) =>
      post.name
        .toLowerCase()
        .includes(
          search.toString().toLowerCase() ||
            post.symbol.toLowerCase().includes(search.toString().toLowerCase())
        )
    );

    if (search === "") {
      setSearchResults(curList);
    } else {
      setSearchResults(filteredResults);
    }
  }, [curList, search]);

  return (
    <div className="App">
      {/* <Input search={search} setSearch={setsearch} handleSubmit={handleSubmit}/>
      <Content curList={searchResults}/>
      <About/> */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Input
                search={search}
                setSearch={setsearch}
                handleSubmit={handleSubmit}
              />
              <Content curList={searchResults} />
            </main>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
