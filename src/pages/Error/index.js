import { Link } from "react-router-dom";

export default function Error(){
    return(
        <div>
            <h1>PAGE NOT EXISTS !!!</h1>
            <Link to="/">Home Page</Link>
        </div>
    );
}