import { Link, Outlet, useParams } from "@remix-run/react";
import { Product, products } from "data";
import { Star, StarHalf, StarIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [contact, setContact] = useState<Product | null>(null);
  const { id } = useParams();
  useEffect(() => {
    const contact = products.find((product) => product.id === id) as Product;
    setContact(contact);
  }, []);

  return (
    <div className="flex p-5 gap-5">
      <div className="h-60 w-60 overflow-hidden shadow-xl rounded-xl">
        <img className="h-full w-full" src={contact?.image} alt="" />
      </div>
      <div>
        <div className="flex gap-3">
          <h2 className="text-3xl font-semibold my-3">{contact?.name}</h2>

          <button>
            {contact?.favorite ? <Star color="yellow" /> : <Star />}
          </button>
        </div>
        <p className="text-blue-400 font-medium text-lg">@{id}</p>
        <div className="flex gap-3 mt-6">
          <Link to={`/contacts/${id}/edit`} className="bg-white shadow-md rounded-md text-blue-500 w-full py-3 px-6 font-semibold">
            Edit
          </Link>
          <button className="bg-white shadow-md rounded-md text-red-500 w-full py-3 px-6 font-semibold">
            Delete
          </button>
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
}
