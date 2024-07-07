import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'

type TicketTableProps<RowType> = {
  rows: RowType[]
  columns: GridColDef[]
}

export default function TicketTable<RowType>({
  rows,
  columns,
}: TicketTableProps<RowType>) {
  const navigate = useNavigate()
  const onRowClick: GridEventListener<'rowClick'> = (params) => {
    // 対象のチケットに移動する
    const ticketId = params.id
    navigate(`/ticket/${ticketId}`)
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowClick={onRowClick}
      />
    </div>
  )
}
