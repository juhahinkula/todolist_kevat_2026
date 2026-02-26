import type { Todo } from "../types";
import type { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";

type TodoTableProps = {
  todos: Todo[];
  handleDelete: (row: number) => void;
}

function TodoTable(props: TodoTableProps) {
  const columns: GridColDef[] = [
    { field: "description", headerName: "Description", width: 250 },
    { field: "priority", headerName: "Priority" },
    { field: "duedate", headerName: "Due date" }
  ]

  return(
    <div style={{ width: "60%", height: 500, margin: "auto" }} >
      <DataGrid 
        rows={props.todos}
        columns={columns}
      />
    </div>
  );
}

export default TodoTable;