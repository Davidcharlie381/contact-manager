import { Link, NavLink } from "@remix-run/react";
import { Product } from "data";

export default function ProductComponent(product: Product) {
  return (
    <NavLink
      to={`/contacts/${product.id}`}
      className={({ isActive }) =>
        `${
          isActive ? "bg-blue-700 text-white shadow-md" : ""
        } w-full my-2 flex p-3 rounded-md`
      }
    >
      {product.name}
    </NavLink>
  );
}
