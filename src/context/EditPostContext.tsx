import { BlogPostView } from "@interfaces/blog.interfaces";
import { useContext, createContext, useCallback, useState } from "react";

interface EditPostContextInterface {
  postState: BlogPostView|null;
  setPostState: (post: BlogPostView) => void;
}

const EditPostContext = createContext<EditPostContextInterface|null>(null);

const EditPostContextProvider: React.FC<{children: React.ReactNode, value: BlogPostView}> = 
({ children, value }: any) => {
  const [postState, setPost] = useState<BlogPostView|null>(value);

  const setPostState = useCallback((post: BlogPostView) => {
    setPost(post);
  }, [setPost]);

  return (
    <EditPostContext.Provider value={{ postState, setPostState}}>
      {children} 
    </EditPostContext.Provider>
  );
}

const useEditPostContext = () => {
  return useContext(EditPostContext) as EditPostContextInterface;
}

export { EditPostContextProvider, useEditPostContext};