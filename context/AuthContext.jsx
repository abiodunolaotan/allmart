




"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
      
        const token = localStorage.getItem("authToken");
        const userData = localStorage.getItem("userData");
        if (token && userData) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsAuthenticated(true);
            setUser(JSON.parse(userData));
        }
        setIsLoading(false);
    }, []);

    const login = (email, password) => {
        const existingUser = JSON.parse(localStorage.getItem("appUsers")) || [];
        const foundUser = existingUser.find(user => user.email === email && user.password === password);

        if (!foundUser) { 
            return { error: "Invalid credentials" };
        }

        const dummyToken = `dummy-token-${Date.now()}`;
        const sessionData = { 
            id: foundUser.id,
            name: foundUser.name,
            email: foundUser.email,
        };
        
        localStorage.setItem("authToken", dummyToken);
        localStorage.setItem("userData", JSON.stringify(sessionData));
        setIsAuthenticated(true);
        setUser(sessionData);
        router.push("/");

        return { success: true };
    };

    const signup = (name, email, password) => {
        const existingUsers = JSON.parse(localStorage.getItem("appUsers")) || [];
        const userExists = existingUsers.some(user => user.email === email);

        if (userExists) {
            return { error: "User with this email already exists" };
        }

        const newUser = { id: Math.random().toString(36).substring(2, 9), name, email, password };
        const updatedUsers = [...existingUsers, newUser];
        localStorage.setItem("appUsers", JSON.stringify(updatedUsers));
        return login(email, password);
    }

    const logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
        setUser(null);
        setIsAuthenticated(false);
        router.push("/"); 
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, login, signup, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}