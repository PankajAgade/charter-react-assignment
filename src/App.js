import { useEffect } from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import CustomerListPage from './pages/CustomerList/CustomerList';
import MainLayout from './pages/MainLayout/MainLayout';
import CustomerDetails from './pages/CustomerDetails/CustomerDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <CustomerListPage /> },
      { path: "customer/:id", element: <CustomerDetails /> }
    ]
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
