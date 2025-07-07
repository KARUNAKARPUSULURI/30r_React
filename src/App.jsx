import { Route, Routes } from 'react-router-dom'
import AppLayout from './Components/Layout/Layout'
import Dashboard from './Components/Dashboard/Dashboard'
import Students from './Components/Students/Students'
import Staff from './Components/Staff/Staff'
import Subjects from './Components/Subjects/Subjects'

function App() {
  //SAR
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path = "/students" element={<Students />} />
          <Route path = "/staff" element={<Staff />} />
          <Route path = "/subjects" element={<Subjects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
