import { useState, useEffect } from "react";
import API from "./api";
import { Header } from "./components/header";
import { Main } from "./components/main";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/produtos")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header setProducts={setProducts} />
      <Main products={products} />
    </div>
  );
}

export default App;
