import axios from "axios";

const DEFAULT_API_CONFIG = {
  baseURL: "http://localhost:3000/api/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const api = axios.create(DEFAULT_API_CONFIG);

const response = await axios.get("https://jsonplaceholder.typicode.com/users");

export default function Home() {
  // console.log("api headers", api.defaults.headers);
  console.log(response.data);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        main
        {response.data.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </main>
      ;
    </>
  );
}
