import { BlogsContext } from "../context/BlogContext";
import { useContext } from "react";

export const useBlogsContext = () => {
    const context = useContext(BlogsContext);

    if (!context) {
        throw new Error('useBlogsContext must be used within a BlogProvider');
    }

    return context;
}