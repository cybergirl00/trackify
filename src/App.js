
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './view/dashboard/components/sidebar/Sidebar';
// import Topbar from './view/dashboard/components/topbar/Topbar';
import Login from './view/login/Login';
import Signup from './view/signup/Signup';
// import Signup from './view/signup/Signup';
import { Outlet } from "react-router-dom";
import DashboardPage from './view/dashboard/DashboardPage';
import Profile from './view/dashboard/components/profile/Profile'// Add more nested routes for sidebar components
import Help from './view/dashboard/help/Help';

function App() {
  const user = localStorage.getItem('userId');

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {user === null ? (
            <>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            </>
          )
          : 
          <Route path="/" element={<Layout />}>
          {/* Render Sidebar outside of nested routes */}
             <Route path="/" element={<LayoutContent />} /> {/* Default content route */}
             <Route index element={<DashboardPage />} /> {/* DashboardHome at root path */}
             <Route path="/profile" element={<Profile />} />
             <Route path="/help" element={<Help />} />
             {/* Add more nested routes for other sidebar components */}
           </Route>
        }
          {/* <Route path="/" element={<Layout />}>
         {/* Render Sidebar outside of nested routes 
            <Route path="/" element={<LayoutContent />} /> 
            <Route index element={<DashboardPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/help" element={<Help />} />
            {/* Add more nested routes for other sidebar components 
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

function Layout() {
  return (
    <div className="layout">
         <Sidebar /> 
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
}

function LayoutContent() {
  // Render appropriate content based on matched route (if needed)
  return <div>Default main content</div>;
}

export default App;
