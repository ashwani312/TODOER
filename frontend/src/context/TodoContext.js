import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const todoContext = createContext();


function useValue() {
    const value = useContext(todoContext);
    return value;
}


function CustomTodoContext({ children }) {

    const [todos, setTodos] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

  
    const fetchTheData = async () => {
        try {
            const res = await axios.get("http://localhost:5000/todo");
            const data = res?.data;
            setTodos(data);
        } catch (error) {
            console.log(error)
        }
    };



    //handledelete
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/todo/${id}`)
        } catch (error) {
            console.log(error)
        }
    }


    const handleSelectAll = (e) => {
        setSelectAll(e.target.checked);
    }

    const hanldeStatus = async (e, id) => {

        const index = todos.findIndex((item) => item.id === id);
        todos[index].status = e.target.value;
        setTodos([...todos]);
        try {
            await axios.put(`http://localhost:5000/todo/${id}`, todos[index])
        } catch (error) {

        }
    }

    const handleFilter = (e) => {
        const filterData = e.target.value;
        const allData = todos;
        if (filterData === "all") {
            setTodos(allData);
        } else if (filterData === "Compleated") {
            const compleatedtodo = todos.filter((item) => item.status === filterData);
            console.log(compleatedtodo)
            setTodos([...compleatedtodo]);
            console.log(todos)

        } else {
            setTodos(todos.filter((item) => item.status === filterData));
        }
    }









    // for modal
    const [showLogin, setShowLogin] = useState(false);
    const [showregister, setshowRegister] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const openLogin = () => {
        setShowLogin(!showLogin);
    }
    const openSignUp = () => {
        setshowRegister(!showregister)
    }
    const openEdit = () => setShowEdit(!showEdit);

    return (
        <todoContext.Provider value={{
            showLogin, openLogin,
            openSignUp, showregister,
            openEdit, showEdit,
            todos, fetchTheData,
            hanldeStatus, handleFilter,
            handleDelete, handleSelectAll, selectAll


        }}>
            {children}
        </todoContext.Provider>
    )
}

export { useValue }

export default CustomTodoContext;