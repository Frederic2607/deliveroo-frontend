import "./App.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Introduction from "./components/Introduction";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const categories = data.categories;

  const fetchData = async () => {
    const response = await axios.get(
      "https://deliveroo-backend-frederic2607.herokuapp.com"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <Header />
      <Introduction data={data} />
      {categories.slice(0, 6).map((category, index) => {
        return (
          <Menu key={index} title={category.name} meals={category.meals} />
        );
      })}
    </div>
  );
}

export default App;
