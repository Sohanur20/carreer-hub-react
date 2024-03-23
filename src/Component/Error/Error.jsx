import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center font-bold mt-60 text-red-400 text-4xl">
            <h2>Oppps 404 page not found</h2>
          <button className="btn"><Link to= '/'>Go back Home</Link></button>
        </div>
    );
};

export default Error;