import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";
import { PostsPage } from "./pages/PostsPage";
import { PostsFormPage } from "./pages/PostsFormPage";

function App() {

  return (
    <BrowserRouter>
    <div className="container mx-auto">
      <Navigation />

      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostsFormPage />} />
        <Route path="/posts-create" element={<PostsFormPage />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
    </BrowserRouter>
  )
}

export default App
