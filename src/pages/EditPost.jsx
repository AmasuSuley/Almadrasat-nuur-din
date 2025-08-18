import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    photo: null
  });
  const [currentImage, setCurrentImage] = useState('');
  const [preview, setPreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/posts/${id}`);
        const { title, description, date, photo } = response.data;
        
        setFormData({
          title,
          description,
          date: date.split('T')[0], 
          photo: null
        });
        
        if (photo) {
          setCurrentImage(`http://localhost:8000/storage/${photo}`);
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        navigate('/admin/dashboard');
      }
    };

    fetchPost();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, photo: file }));
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const token = localStorage.getItem('adminToken');
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('date', formData.date);
      if (formData.photo) {
        formDataToSend.append('photo', formData.photo);
      }

      formDataToSend.append('_method', 'PUT');

      const response = await axios.post(
        `http://localhost:8000/api/posts/${id}`,
        formDataToSend,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          }
        }
      );

      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update post');
      console.error('Error updating post:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <h1 className="text-xl font-bold">Edit Post</h1>
      </nav>

      <div className="container mx-auto p-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Edit Post</h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full px-3 py-2 border rounded-lg"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="5"
                className="w-full px-3 py-2 border rounded-lg"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full px-3 py-2 border rounded-lg"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="photo">
                Featured Image
              </label>
              
              {currentImage && !preview && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Current Image:</h3>
                  <img 
                    src={currentImage} 
                    alt="Current" 
                    className="max-w-xs max-h-48 object-contain border rounded"
                  />
                </div>
              )}
              
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                className="w-full px-3 py-2 border rounded-lg"
                onChange={handleFileChange}
              />
              
              {preview && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">New Image Preview:</h3>
                  <img 
                    src={preview} 
                    alt="Preview" 
                    className="max-w-xs max-h-48 object-contain border rounded"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate('/admin/dashboard')}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Updating...' : 'Update Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPost;