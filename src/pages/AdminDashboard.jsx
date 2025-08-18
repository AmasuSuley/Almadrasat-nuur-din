import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await axios.get('http://localhost:8000/api/posts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        navigate('/admin/login');
      }
    };

    fetchPosts();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.post('http://localhost:8000/api/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      localStorage.removeItem('adminToken');
      navigate('/admin/login');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('adminToken');
      await axios.delete(`http://localhost:8000/api/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPosts(posts.filter(post => post.id !== id));
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
        <div className="pt-24"></div>
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <button 
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </nav>

      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Manage Posts</h2>
          <button 
  onClick={() => navigate('/admin/posts/create')}
  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
>
  Create New Post
</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description.substring(0, 100)}...</p>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => navigate(`/admin/posts/edit/${post.id}`)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(post.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;