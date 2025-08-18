import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [commentForm, setCommentForm] = useState({
    author_name: '',
    content: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postRes, commentsRes] = await Promise.all([
          axios.get(`http://localhost:8000/api/posts/${id}`),
          axios.get(`http://localhost:8000/api/comments`, {
            params: { post_id: id }
          })
        ]);
        setPost(postRes.data);
        setComments(commentsRes.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleCommentChange = (e) => {
    setCommentForm({
      ...commentForm,
      [e.target.name]: e.target.value
    });
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/comments', {
        ...commentForm,
        post_id: id
      });
      
      setComments([response.data, ...comments]);
      setCommentForm({ author_name: '', content: '' });
      setShowCommentForm(false);
    } catch (err) {
      console.error('Error submitting comment:', err);
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (!post) return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold text-red-500">Post not found</h2>
      <button 
        onClick={() => navigate(-1)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Back to News
      </button>
    </div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="pt-16"></div>
      <div className="max-w-4xl mx-auto px-4">
        {/* Post Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 transition-all duration-300 hover:shadow-xl">
          {post.photo && (
            <img 
              src={`http://localhost:8000/storage/${post.photo}`} 
              alt={post.title}
              className="w-full h-96 object-cover object-center"
            />
          )}
          
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 font-medium">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {post.category || 'General'}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
            
            <div className="prose max-w-none text-gray-700 mb-8">
              {post.description.split('\n').map((paragraph, i) => (
                <p key={i} className="mb-4">{paragraph}</p>
              ))}
            </div>
            
            <div className="flex justify-between items-center border-t pt-6">
              <button 
                onClick={() => navigate(-1)}
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to News
              </button>
              
              <button 
                onClick={() => setShowCommentForm(!showCommentForm)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition flex items-center"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                {showCommentForm ? 'Cancel' : 'Write Comment'}
              </button>
            </div>
          </div>
        </div>

        {/* Comment Form (Conditional) */}
        {showCommentForm && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 animate-fade-in">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Leave a Comment</h3>
            <form onSubmit={handleCommentSubmit}>
              <div className="mb-4">
                <label htmlFor="author_name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="author_name"
                  name="author_name"
                  value={commentForm.author_name}
                  onChange={handleCommentChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
                  Your Comment
                </label>
                <textarea
                  id="content"
                  name="content"
                  rows="4"
                  value={commentForm.content}
                  onChange={handleCommentChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Share your thoughts..."
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition flex items-center"
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Comments Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">
              Comments ({comments.length})
            </h2>
          </div>
          
          {comments.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No comments yet. Be the first to share your thoughts!
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
            
{comments.map(comment => (
  <div key={comment.id} className="p-6 hover:bg-gray-50 transition">
    <div className="flex justify-between items-start mb-2">
      <h4 className="font-bold text-gray-800 flex items-center">
        <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-3">
          {comment.author_name.charAt(0).toUpperCase()}
        </span>
        {comment.author_name}
      </h4>
      <span className="text-sm text-gray-500">
        {new Date(comment.created_at).toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </span>
    </div>
    <p className="text-gray-700 pl-11">{comment.content}</p>
  </div>
))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PostDetail;