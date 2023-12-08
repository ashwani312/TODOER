import { useState } from 'react';
import './Form.scss';
import axios from 'axios';

const Form = () => {
    const [value, setValue] = useState({
        title: "",
        category: "",
        status: "onhold",
        fav : false
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (value.title === "") {
            return
        };
        try {
            await axios.post("http://localhost:5000/todo", value);
        } catch (error) {
            console.log(error)
        }
        setValue({ title: "", category: "" });

    }
    const handleReset = (e) => {
        e.preventDefault();
        setValue({ title: "", category: "", status: "onhold" });
    }
    return (
        <div className='Form'>
            <h1>What Do You want to do Today?</h1>
            <form>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder='Title...' onChange={(e) => setValue((prev) => ({ ...prev, title: e.target.value }))} value={value.title} />
                </div>
                <div>
                    <label htmlFor="title">Category</label>
                    <input type="text" id="title" placeholder='Title...' onChange={(e) => setValue((prev) => ({ ...prev, category: e.target.value }))} value={value.category} />
                </div>
                <div className="formbuttons">
                    <button type='submit' onClick={handleSubmit}>SUBMIT</button>
                    <button onClick={handleReset}>RESET</button>
                </div>
            </form>
        </div>
    )
}

export default Form