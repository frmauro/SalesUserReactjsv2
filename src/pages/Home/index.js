import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <h1>welcome to Home page!!!</h1>
            <Link to="/user/create">Users Create</Link>
        </div>
    );
}
