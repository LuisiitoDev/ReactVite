import { useContext } from "react";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { useParams } from "react-router-dom";

function Home() {
  const context = useContext(ShoppingCartContext);
  const { category } = useParams();

  const renderView = () => {
    if (category !== undefined) {

      const filtered = context.items.filter((item) =>
        item.category.name.toLowerCase().includes(category.toLowerCase())
      );

      if (filtered.length){
        return filtered.map((item) => <Card key={item.id} {...item} />);
      }else{
        return <div>There are nothing to see :(</div>
      }

      

    } else {
      return context.filtereditems?.map((item) => <Card key={item.id} {...item} />);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
        <ProductDetail />
      </div>
    </div>
  );
}

export default Home;
