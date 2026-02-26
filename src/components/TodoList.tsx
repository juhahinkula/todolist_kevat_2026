import { useState } from "react";
import TodoTable from "./TodoTable";
import type { Todo, Priority } from "../types";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
  const [todo, setTodo] = useState<Todo>({
    id: "",
    description: "",
    priority: "low",
    duedate: "" 
  });
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = () => {
    if (todo.description.trim()) {
      setTodos([{...todo, id: uuidv4()}, ...todos]);
      setTodo({
        id: "",
        description: "",
        priority: "low",
        duedate: ""
      })
    }
    else {
      alert("Enter description first");
    }
  }

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure?"))
      setTodos(todos.filter((todo) => id != todo.id));
  }

  return(
    <>
      <Stack 
        mt={2}
        mb={2}
        direction="row" 
        spacing={2} 
        alignItems="center" 
        justifyContent="center"
      >
        <TextField
          label="Description"
          value={todo.description}
          onChange={e => setTodo({...todo, description: e.target.value})}
        />
        <TextField
          title="Priority"
          select
          slotProps={{
            select: {
              native: true,
            },
          }}
          value={todo.priority}
          onChange={e => 
            setTodo({...todo, priority: e.target.value as Priority})}    
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </TextField>
        <TextField
          type="date"
          value={todo.duedate}
          onChange={e => setTodo({...todo, duedate: e.target.value})}
        />
        <Button variant="contained" onClick={handleAdd}>Add Todo</Button>
      </Stack>
      <TodoTable todos={todos} handleDelete={handleDelete} />
    </>
  );
}

export default TodoList;