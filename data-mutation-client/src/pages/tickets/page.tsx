import { GridColDef } from '@mui/x-data-grid'
import TicketTable from '../../components/Ticket/TicketTable'

type RowType = {
  id: number
  title: string
  localGoverment: string | null
  willBeUpdated: string | null
}

const columns: GridColDef<RowType>[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'タイトル', width: 130 },
  { field: 'localGoverment', headerName: '自治体', width: 130 },
  { field: 'willBeUpdated', headerName: '更新予定日', width: 130 },
]

const rows: RowType[] = [
  { id: 1, title: 'Snow', localGoverment: 'Jon', willBeUpdated: '2024/07/07' },
  {
    id: 2,
    title: 'Lannister',
    localGoverment: 'Cersei',
    willBeUpdated: '2024/07/07',
  },
  {
    id: 3,
    title: 'Lannister',
    localGoverment: 'Jaime',
    willBeUpdated: '2024/07/07',
  },
  {
    id: 4,
    title: 'Stark',
    localGoverment: 'Arya',
    willBeUpdated: '2024/07/07',
  },
  {
    id: 5,
    title: 'Targaryen',
    localGoverment: 'Daenerys',
    willBeUpdated: '2024/07/07',
  },
  {
    id: 6,
    title: 'Melisandre',
    localGoverment: null,
    willBeUpdated: '2024/07/07',
  },
  {
    id: 7,
    title: 'Clifford',
    localGoverment: 'Ferrara',
    willBeUpdated: '2024/07/07',
  },
  {
    id: 8,
    title: 'Frances',
    localGoverment: 'Rossini',
    willBeUpdated: '2024/07/07',
  },
  {
    id: 9,
    title: 'Roxie',
    localGoverment: 'Harvey',
    willBeUpdated: '2024/07/07',
  },
]

export default function TicketPage() {
  return <TicketTable<RowType> rows={rows} columns={columns} />
}
