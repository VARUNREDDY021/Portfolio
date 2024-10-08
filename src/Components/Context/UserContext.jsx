import React, { useState } from 'react';

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
    const [change, setChange] = useState(false);

    return (
        <UserContext.Provider value={{ change, setChange }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
