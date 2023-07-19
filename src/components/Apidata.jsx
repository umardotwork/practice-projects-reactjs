//import axios from "axios";
import React from "react";
import useExternalHook from "./useExternalHook";
import { Link } from "react-router-dom";

const Apidata = () => {
  //const [data, setData] = useState([]);

  const { data } = useExternalHook(
    "https://jsonplaceholder.typicode.com/posts"
  );

  //   const fetchdata = () => {
  //     axios
  //       .get(`https://jsonplaceholder.typicode.com/posts`)
  //       .then((resp) => {
  //         console.log(resp);
  //         setData(resp.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  //   useEffect(() => {
  //     fetchdata();
  //   }, []);

  return (
    <>
      <div className="api-main">
        <h1 className="api-title1">JSONplaceholder Api Comments Data</h1>
        {data &&
          data?.slice(0, 8).map((item) => {
            return (
              <div key={item.id}>
                <Link to={"/jsoncomments/article/" + item.id}>
                  <h2 className="api-title">
                    {item.id}: {item.title}
                  </h2>
                </Link>
                {/*<h3>⦿ EMAIL : {item.email}</h3>
            <p>COMMNET : {item.body}</p>*/}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Apidata;
