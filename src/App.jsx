import { useState } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AppLayout from './ui/AppLayout';
import Login from './pages/Login';
import Search from './pages/Search';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './ui/components/ProtectedRoute';
import Form from './pages/Form';
import Passengers from './pages/Passengers';
import ForgetPassword from './pages/ForgetPassword';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
    <BrowserRouter>
    <Routes>
      <Route element = {
        <ProtectedRoute>
          <AppLayout/>
        </ProtectedRoute>
        }>
        <Route index element = {<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element = {<Dashboard/>} />
        <Route path="/flights/:flightId" element = {<Form/>} />
        <Route path="/passengers/:flightId" element = {<Passengers/>} />
      </Route>
      <Route path="login" element = {<Login/>} />
      <Route path="forgotpassword" element = {<ForgetPassword/>} />
      <Route path="search" element = {<Search/>} />

    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
