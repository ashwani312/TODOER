import Form from "../../components/Form/Form";
import List from "../../components/List/List";
import Navbar from "../../components/Navbar/Navbar";
import Page from "../../components/Page/Page";
import Search from "../../components/Search/Search";
import { useValue } from "../../context/TodoContext";
import Login from "../login/Login";
import "./Home.scss";


const Home = () => {
    const {showLogin} = useValue()
    return (
        <div className='Home' style={{backgroundColor : showLogin?"black" : "white",overflowY : "hidden"}}>
            <Navbar />
            <Form/>
            <Search/>
            <List/>
            <Page/>
        </div>
    )
}

export default Home