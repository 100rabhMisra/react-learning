import { render } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";

function SimpleApijson() {
  const [data, setData] = useState([]);

  // const BASEURL = "https://dummyjson.com/products";
  const BASEURL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    axios
      .get(BASEURL)
      .then((res) => {
        console.log(res);
        console.log("res--------------", res);
        // console.log("gettting data --", res.data.products[0].brand);

        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h3>Simple Json request</h3>
      <Table>
        <tr>
          <th>User-Id</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
        {data.map((item, index) => (
          <tr>
            <td key={index}>{item.userId}</td>

            <td>{item.id}</td>
            <td>{item.title}</td>
          </tr>
        ))}
      </Table>
    </>
  );
}

export default SimpleApijson;
