import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <div class="row">
                <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                    <span class="card-title">welcome to Home page!!!</span>
                    <p>This is a system to use for manager users.<br /> 
                    Below follow many links for you access many areas of system effectively.</p>
                    </div>
                    <div class="card-action">
                    <Link to="/user/create">Create</Link>
                    <Link to="/user/users">Users</Link>
                    </div>
                </div>
                </div>
            </div>

            <ul className="collection">
                <li className="collection-item avatar">
                <i className="material-icons circle green">insert_chart</i>
                <span className="title">Title</span>
                <p>Administrator <br />
                    Francisco Mauro de Lima
                </p>
                <a href="#!" className="secondary-content"><i className="material-icons">frmauro8@gmail.com</i></a>
                </li>
            </ul>
        </div>
    );
}
