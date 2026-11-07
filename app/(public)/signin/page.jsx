"use client";

import AuthForm from "@/components/AuthForm";
import { iconList } from "@/constants/mockData";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useState } from "react";

const SignInPage = () => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(null);

    const { icon } = iconList[1];

    const handleSignIn = (event) => {
        event.preventDefault();
        
        const result = login(formData.email, formData.password);
        if (result && result.error) {
            setError(result.error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const signinFields = [
        { 
            name: "email", 
            label: "Email", 
            type: "email", 
            placeholder: "abiodunolaotan@allmart.com",
            
        },
        { 
            name: "password", 
            label: "Password", 
            type: "password", 
            placeholder: "********" 
        }
    ];

    return (
        <AuthForm
            icon={icon}
            title="Welcome Back"
            subtitle="Your favorite stores are waiting for you."
            error={error}
            fields={signinFields}
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSignIn}
            submitButtonText="Sign In"
            footerText="New to AllMart?"
            footerLinkText="Create an account."
            footerLinkHref="/signup"
            required
            
        >
           
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <div>
                        <input type="checkbox" name="remember" className="form-checkbox h-5 w-5 text-[#13244A] focus:ring-[#13244A] border-gray-300 rounded" />
                    </div>
                    <p className="font-medium text-[#6B778E]">Remember me</p>
                </div>

                <div>
                    <Link href="/forgot-password" className="text-[#13244A] hover:underline font-bold">
                        Forgot Password?
                    </Link>
                </div>
            </div>
        </AuthForm>
    );
};

export default SignInPage;