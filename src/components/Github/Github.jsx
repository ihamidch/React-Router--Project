import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  return (
    <div className="text-3xl text-center bg-gray-700 text-white p-4">
      Github Followers: {data.followers}
      <img
        src={data?.avatar_url || "null"} // Use || instead of :
        alt="avatar"
        width={300}
      />
    </div>
  );
};

export default Github;

export const githunInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/ihamidch');
  const data = await response.json();
  return data;
};
