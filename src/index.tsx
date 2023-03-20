import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';

import { CreateProgramPage } from "./pages/CreateProgram";
import { CreateResidentPage } from './pages/CreateResident';
import { ProgramsPage } from "./pages/ProgramsPage";
import { ResidentsPage } from "./pages/ResidentsPage";
import { ErrorPage } from './pages/ErrorPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProgramsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/create-program',
    element: <CreateProgramPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/create-resident',
    element: <CreateResidentPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/programs',
    element: <ProgramsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/residents',
    element: <ResidentsPage />,
    errorElement: <ErrorPage />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
