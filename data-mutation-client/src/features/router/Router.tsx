import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MiniDrawer from '../../layout/MiniDrawer'
import TicketPage from '../../pages/tickets/page'
import TicketDetailPage from '../../pages/ticket/page'
import DataMutationPage from '../../pages/data-mutation/page'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MiniDrawer />}>
          <Route path="home" element={<>HOME</>} />
          <Route path="tickets" element={<TicketPage />} />
          <Route path="ticket/:id">
            <Route element={<TicketDetailPage />} />
            <Route path="data-mutation/:id" element={<DataMutationPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
