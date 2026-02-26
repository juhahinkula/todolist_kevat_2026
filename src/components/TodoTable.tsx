import type { Todo } from "../types";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { DataGrid, GridActionsCell, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';

type TodoTableProps = {
  todos: Todo[];
  handleDelete: (id: string) => void;
}

function TodoTable(props: TodoTableProps) {
  const columns: GridColDef[] = [
    { field: "description", headerName: "Description", width: 250 },
    { field: "priority", headerName: "Priority" },
    { field: "duedate", headerName: "Due date" },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      renderCell: (params: GridRenderCellParams) =>
        <GridActionsCell {...params}>
          <GridActionsCellItem 
            label="Delete"
            showInMenu
            icon={<DeleteIcon color="error" />}
            onClick={() => props.handleDelete(params.id as string)}
          />
        </GridActionsCell>
    }
  ]

  return(
    <div style={{ width: "60%", height: 500, margin: "auto" }} >
      <DataGrid 
        rows={props.todos}
        columns={columns}
        autoPageSize
      />
    </div>
  );
}

export default TodoTable;