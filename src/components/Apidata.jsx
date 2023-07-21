//import axios from "axios";
import React from "react";
import useExternalHook from "./useExternalHook";
import { Link } from "react-router-dom";

const Apidata = () => {
  //const [data, setData] = useState([]);

  const apiUrl = "https://jsonplaceholder.typicode.com/posts";
  const { data, loading } = useExternalHook(apiUrl);

  if (loading) {
    return (
      <div>
        <h2>Loading data...</h2>
      </div>
    );
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const location = useLocation();
  // console.log(location);

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
        <h1 className="api-title1">JSONplaceholder Api Posts Data</h1>
        {data &&
          data?.slice(0, 15).map((item) => {
            return (
              <div key={item.id}>
                <Link to={"/jsonposts/posts/" + item.id}>
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
      <div className="apidata-btn">
        <button onClick={handleScrollTop} className="link404">
          Go to Top
        </button>
      </div>
    </>
  );
};

export default Apidata;
