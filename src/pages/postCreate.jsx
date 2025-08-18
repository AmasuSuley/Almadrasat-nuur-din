import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    photo: null
  });
  const [preview, setPreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
    reader.readAsDataURL(file);
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
      formDataToSend.append('photo', formData.photo);

      const response = await axios.post(
        'http://localhost:8000/api/posts',
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
      setError(err.response?.data?.message || 'Failed to create post');
      console.error('Error creating post:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <h1 className="text-xl font-bold">Create New Post</h1>
      </nav>

      <div className="container mx-auto p-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Add New Post</h2>
          
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
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                className="w-full px-3 py-2 border rounded-lg"
                onChange={handleFileChange}
                required
              />
              
              {preview && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Image Preview:</h3>
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
                {isSubmitting ? 'Creating...' : 'Create Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;