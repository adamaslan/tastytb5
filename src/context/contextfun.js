import React, { createContext, useState } from "react";

const contextFun = createContext();

const ContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "articles"));
      querySnapshot.docs.map((doc) => console.log(doc.data()));
    };
    getPosts();
  }, []);

  return (
    <contextFun.Provider value={{ posts, setPosts }}>
      {children}
    </contextFun.Provider>
  );
};

export { contextFun, ContextProvider };
