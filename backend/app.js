import express from "express";
import mysql from "mysql";
import cors from "cors";
const PORT = 5000;
const app = express();

//connecting The Databse
const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "509@+MYsql",
    database : "todoapp",
    multipleStatements : "true"
});

//middlewares
app.use(express.json());
app.use(cors());


//get Request
app.get("/todo", (req, res)=>{
    const q = "SELECT * FROM todos";
    db.query(q, (err, data)=>{
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
});

//get particular todo
app.get("/todo/:id", (req, res)=>{
    const todoId = req.params.id;
    const q = "SELECT * FROM todos WHERE ID = ?";
    db.query(q,[todoId], (err, data)=>{
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
});

//post request
app.post("/todo", (req, res)=>{
    const q = "INSERT INTO todos (`title`, `category`) VALUES (?)";
    const values = [req.body.title, req.body.category];
    db.query(q, [values], (err, data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json("todo has been added succesfully");
    })
});



//delete request
app.delete("/todo/:id", (req, res)=>{
    const todoId = req.params.id;
    const q = "DELETE FROM todos WHERE id = ?";
    db.query(q, [todoId], (err, data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
});

//update todo
app.put("/todo/:id", (req, res)=>{
    const todoId = req.params.id;
    const q = "UPDATE todos SET `title` = ?, `category` = ?, `status` = ? WHERE id = ?";
    const values = [req.body.title, req.body.category, req.body.status];
    db.query(q, [...values, todoId], (err, data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
});


app.post("/user/signup", (req, res)=>{
    const q = "INSERT INTO user (`name`, `email`, `password`) VALUES (?)";
    const values = [req.body.name, req.body.email, req.body.password];
    db.query(q, [values], (err, data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
});

//listening the port
app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}`);
})