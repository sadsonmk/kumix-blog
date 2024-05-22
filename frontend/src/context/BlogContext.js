import { createContext, useReducer } from "react";

export const BlogContext = createContext();

export const blogsReducer = (state, action) => {
    switch (action.type) {
        case 'GET_BLOGS':
            return {
                ...state,
                blogs: action.payload
            }
        case 'CREATE_BLOG':
            return {
                ...state,
                blogs: [action.payload, ...state.blogs]
            }
        case 'DELETE_BLOG':
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog._id !== action.payload)
            }
        default:
            return state
    }
}

export const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(blogsReducer, { blogs: null})


    return (
        <BlogContext.Provider value={{state, dispatch}}>
        {children}
        </BlogContext.Provider>
    );
}