import { Form } from "@remix-run/react";
import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <Form className="flex gap-2 p-4 bg-neutral-200  border-b-gray-300 border fixed isolation-auto top-0 left-0 w-[399px]">
      <div className="p-3 flex w-full bg-white shadow-sm focus-within:shadow-md rounded-md">
        <Search />
        <input type="text" className="outline-none w-full pl-3" />
      </div>
      <button className="bg-white hover:shadow-xl shadow-md rounded-md text-blue-500 w-1/4 px-4 font-semibold">
        New
      </button>
    </Form>
  );
}
