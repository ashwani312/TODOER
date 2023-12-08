import { useValue } from '../../context/TodoContext'
import './Edit.scss'


const Edit = () => {
    const {openEdit} = useValue()
  return (
    <div className="Edit">
    <button className="cross" onClick={()=>openEdit()}>X</button>
    <div className="loginWrapper">
        <h1>Edit</h1>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="title" className="loginInput" />
                <input placeholder="category" className="loginInput" />
                <button className="loginButton">Submit</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Edit