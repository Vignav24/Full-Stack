import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../hooks/UserContext";

const About = () => {
    const name = useContext(UserContext);
    return (
        <div>
            <h1>About Page</h1>
            <h1>Hi {name}</h1>
            <Link to="/state">Use state Example</Link>
            <br />
            <Link to="/form">Controlled Form</Link>
            <br />
            <Link to="/effect">Useeffect Example</Link>
        </div>
    );
}

export default About;
