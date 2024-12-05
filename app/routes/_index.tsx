
export async function loader() {
  try {
    const response = await fetch(`${process.env.API_URL}/users`);
    console.log(await response.json());
  } catch (error) {
    console.log(error);
  }
  return true;
}

export default function Index() {
  return (
    <div className="p-10">
      <h1 className="text-5xl font-semibold mb-5">Welcome</h1>
      <p className="text-xl">Click on a contact to preview or edit </p>
    </div>
  );
}
