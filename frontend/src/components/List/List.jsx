import './List.scss'
import { useValue } from '../../context/TodoContext'
import Edit from '../Edit/Edit'
import { useEffect } from 'react';


const List = () => {
  const { todos,
    openEdit,
    handleSelectAll,
    handleFilter,
    showEdit,
    selectAll,
    hanldeStatus,
    handleDelete,
    fetchTheData
  }
    = useValue();

  useEffect(() => {
    fetchTheData()
  }, [todos])

  return (
    <div className='List'>
      <div className="Listtop">
        <div className="selectall">
          <input type="checkbox" name="selectall" id="selectall" onChange={(e) => handleSelectAll(e)} />
          <label htmlFor="selectall">selectall</label>
        </div>
        <select name="status" id="status" style={{ border: "1px solid black", borderRadius: "5px" }}>
          <option value="compleated">compleated</option>
          <option value="notcompleated">Not Compleated</option>
        </select>
        <div className="filterlist">
          <span>

            <input type="radio" name="all" id="all" value="all" onChange={(e) => handleFilter(e)} />
            <label htmlFor="all">all</label>
          </span>
          <span>
            <input type="radio" name="compleated" id="compleated" value="Compleated" onChange={(e) => handleFilter(e)} />
            <label htmlFor="compleated">compleated</label>
          </span>
          <span>
            <input type="radio" name="onhold" id="onhold" value="On-hold" onChange={(e) => handleFilter(e)} />
            <label htmlFor="onhold">on hold</label>
          </span>
        </div>
      </div>
      <div className="ListBottom">

        {todos?.map((item, index) => (
          <div className="mytodolist" key={index}>
            <div className="mytodolistleft">
              <img src="https://cdn-icons-png.flaticon.com/128/10308/10308038.png" alt="" />
              <input type="checkbox" name="" id="cricket" checked={selectAll} />
              <label htmlFor="cricket">{item?.title}</label>

            </div>
            <div className="mytodolistright">
              <div>

                <select name="status" id="status" onChange={(e) => hanldeStatus(e, item?.id)} style={{ border: "1px solid black", borderRadius: "5px" }}>
                  <option value="On-hold" selected={item?.status === "On-hold"}>On hold</option>
                  <option value="Compleated" selected={item?.status === "Compleated"}>compleated</option>
                  <option value="In-progress" selected={item?.status === "In-progress"}>In Progress</option>
                </select>
              </div>
              <div className="actionicons">
                <img src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png" alt="" onClick={() => openEdit()} />
                <img src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" alt="" onClick={() => handleDelete(item?.id)} />
                {/* <img src="https://cdn-icons-png.flaticon.com/128/151/151910.png" alt="" /> */}
                <img src="https://cdn-icons-png.flaticon.com/128/833/833472.png" alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {showEdit && <Edit />}
    </div>
  )
}

export default List