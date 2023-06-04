import { useState, useEffect } from "react";
import Card from "../../Components/Card";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => {
        alert("ups! ocurrio un error inespeado, intenta de nuevo.");
      });
  }, []);

  return (
    <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items && items.map((item) => (
            <Card key={item.id} {...item} />
          ))
        }
    </div>
  );
}

export default Home;
