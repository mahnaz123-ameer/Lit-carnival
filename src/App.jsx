import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import AllRoutes from "./routes"; // Importing AllRoutes
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AllRoutes />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
