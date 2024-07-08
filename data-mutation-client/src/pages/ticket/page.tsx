import { Add } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridEventListener } from '@mui/x-data-grid'
import { useNavigate, useParams } from 'react-router-dom'

type RowType = {
  id: number
  name: string
  accountA: boolean
  accountB: boolean
}

const columns: GridColDef<RowType>[] = [
  { field: 'name', headerName: '更新内容', width: 130 },
  {
    field: 'accountA',
    headerName: 'accountA',
    width: 20,
    type: 'boolean',
    editable: true,
    renderCell: (params) => (
      <input
        type="checkbox"
        checked={params.value}
        onChange={(event) => {
          params.api.setEditCellValue({
            id: params.id,
            field: 'active',
            value: event.target.checked,
          })
        }}
      />
    ),
  },
  {
    field: 'accountB',
    headerName: 'accountB',
    width: 20,
    type: 'boolean',
    editable: true,
    renderCell: (params) => (
      <input
        type="checkbox"
        checked={params.value}
        onChange={(event) => {
          params.api.setEditCellValue({
            id: params.id,
            field: 'active',
            value: event.target.checked,
          })
        }}
      />
    ),
  },
]

const rows: RowType[] = [
  { id: 1, name: 'レイヤ名変更', accountA: true, accountB: false },
  { id: 2, name: 'レイヤ名変更', accountA: false, accountB: true },
  { id: 3, name: 'レイヤ名変更', accountA: false, accountB: true },
]

export default function TicketDetailPage() {
  const params = useParams()
  //   ticketIdを用いて、チケットの情報を取得
  //   必要な情報: チケットの名称、作成び、更新予定日、対象団体一覧、更新内容一覧
  const ticketName = 'チケット名'
  const ticketCreatedAt = '2024/07/07'
  const willBeUpdatedAt = '2024/07/07'
  const targetLocalGverment = ''

  const navigate = useNavigate()
  const onRowClick: GridEventListener<'rowClick'> = (params) => {
    const mutationId = params.id
    navigate(`data-mutation/${mutationId}`)
  }

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" component="h2">
          {ticketName}
        </Typography>
        <IconButton color="primary">
          <Add />
        </IconButton>
      </Box>
      <Box mt={2}>
        <DataGrid rows={rows} columns={columns} onRowClick={onRowClick} />
      </Box>
    </>
  )
}
