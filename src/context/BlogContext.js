import createDataContext from './createDataContext';
import jsonserver from '../api/jsonserver';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return [...action.payload];
    case 'add_blogpost':
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'edit_blogpost':
      return state.map((blog) => {
        return blog.id === action.payload.id ? action.payload : blog;
      });
    case 'delete_blogpost':
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    try {
      const response = await jsonserver.get('/blogposts');
      dispatch({ type: 'get_blogposts', payload: response.data });
    } catch (error) {}
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    try {
      const response = await jsonserver.post('/blogposts', { title, content });
      dispatch({ type: 'add_blogpost', payload: response.data });
      if (callback) {
        callback();
      }
    } catch (error) {}
  };
};
const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    try {
      const response = await jsonserver.put(`/blogposts/${id}`, {
        title,
        content,
      });
      console.log(response.data);
      dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
      if (callback) {
        callback();
      }
    } catch (error) {}
  };
};
const deleteBlogPost = (dispatch) => {
  return async (id) => {
    try {
      await jsonserver.delete(`/blogposts/${id}`);
      dispatch({ type: 'delete_blogpost', payload: id });
    } catch (error) {}
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
