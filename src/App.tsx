import { useState } from 'react'
import Sidebar from './components/leftSidebar'
import Dashboard from './pages/Dashboard'
import Midle from './Mid/Midle'
import Cards from './components/Cards/Cards'
function App() {

  return (
    <div className="flex">

      <Dashboard />
      {/* <Sidebar />
      <Midle /> */}
      {/* <Cards /> */}
    </div>


  )


}
export default App
