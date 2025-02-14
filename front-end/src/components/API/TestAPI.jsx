import { useEffect, useState } from "react";
import axios from "axios";

const TestAPI = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/hello/")
      .then(response => setMessage(response.data.message))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h2>Response from Django:</h2>
      <p>{message}</p>
    </div>
  );
};

export default TestAPI;