import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboards/user/Dashboard'
import Sidemenu from '../pages/dashboards/components/Sidemenu'
import "../styles/dashboards/user/Layout.css"
import TopMenu from '../pages/dashboards/components/TopMenu'

const UserRoutes = () => {
  return (
    <div className="user-layout">
      <Sidemenu/>

      <div className="main-container">
        <TopMenu/> 
        <Routes>
            <Route path='/' element={<Dashboard/>} />
        </Routes>
      </div>
    </div>
  )
}

export default UserRoutes