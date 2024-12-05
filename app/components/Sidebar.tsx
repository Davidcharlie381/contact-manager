import { products } from "data";
import Searchbar from "./Searchbar";
import ProductComponent from "./Product";

export default function Sidebar() {
  return (
    <nav className="relative  bg-neutral-200 h-screen overflow-y-scroll max-w-[400px] p-4 pt-10">
      <Searchbar />
      <ul className="mt-14">
        {products.map((product) => (
          <ProductComponent name={product.name} id={product.id} />
        ))}
      </ul>
    </nav>
  );
}