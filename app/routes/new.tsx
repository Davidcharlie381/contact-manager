import { Form } from "@remix-run/react";

export default function New() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold mb-7">Create new contact</h2>
      <Form className="space-y-5">
        <div className="grid grid-cols-8">
          <label className="col-span-2 font-normal text-lg" htmlFor="name">
            Name
          </label>
          <div className="col-span-6 flex w-full gap-7 justify-between">
            <input
              type="text"
              id="name"
              className="p-4 w-1/2 shadow-md focus:shadow-xl border rounded-lg outline-none"
              placeholder="First"
            />
            <input
              type="text"
              id="name"
              className="p-4 w-1/2 shadow-md focus:shadow-xl border rounded-lg outline-none"
              placeholder="Last"
            />
          </div>
        </div>
        <div className="grid grid-cols-8">
          <label className="col-span-2 font-normal text-lg" htmlFor="twitter">
            Twitter
          </label>
          <div className="col-span-6 flex w-full gap-7 justify-between">
            <input
              type="text"
              id="name"
              className="p-4 w-full shadow-md focus:shadow-xl border rounded-lg outline-none"
              placeholder="@jack"
            />
          </div>
        </div>
        <div className="grid grid-cols-8">
          <label className="col-span-2 font-normal text-lg" htmlFor="twitter">
            Avatar URL
          </label>
          <div className="col-span-6 flex w-full gap-7 justify-between">
            <input
              type="url"
              id="name"
              className="p-4 w-full shadow-md focus:shadow-xl border rounded-lg outline-none"
              placeholder="https://example.com/avatar.jpg"
            />
          </div>
        </div>
        <div className="grid grid-cols-8">
          <label className="col-span-2 font-normal text-lg" htmlFor="twitter">
            Notes
          </label>
          <div className="col-span-6 flex w-full gap-7 justify-between">
            <textarea
              id="name"
              rows={6}
              className="p-4 w-full shadow-md focus:shadow-xl border rounded-lg outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-8">
          <div className="col-span-2"></div>
          <div className="flex space-x-5">
            <button className="bg-white shadow-md hover:shadow-xl rounded-md text-blue-500 w-full py-3 px-6 font-semibold">
              Save
            </button>
            <button className="bg-white shadow-md hover:shadow-xl rounded-md text-gray-500 w-full py-3 px-6 font-semibold">
              Cancel
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}
