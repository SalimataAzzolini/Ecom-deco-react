import React, { createContext, useState } from 'react';

 export const UserDatasContext = createContext({
    userDatas: {},
    setUserDatas: () => {},
 });

const UserDatasProvider = ({ children }) => {
    const [userDatas, setUserDatas] = useState({});
    
    return (
    
        <UserDatasContext.Provider value={{ userDatas, setUserDatas }}>
        {children}
        </UserDatasContext.Provider>
    );
};

export default UserDatasProvider;


