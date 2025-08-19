import React from 'react'; 
import { HashRouter as Router } from 'react-router-dom';
import {  Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import News from './pages/News';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import CreatePost from './pages/postCreate';
import EditPost from './pages/EditPost';
import PostDetail from './pages/PostDetails';


function App() {
  return (
   <Router>
       <Navbar/>
       <Routes>
        <Route path="#/" element={<Home />} />
        <Route path="#/about" element={<About />} />
        <Route path="#/contact" element={<Contact />} />
         <Route path="#/gallery" element={<Gallery />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/posts/create" element={<CreatePost />} />
        <Route path="/admin/posts/edit/:id" element={<EditPost />} />
         <Route path="#/news" element={<News />} />
         <Route path="/news/:id" element={<PostDetail />} />
        
  
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;