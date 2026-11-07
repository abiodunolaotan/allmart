"use client";

import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useState } from "react";

const SignUpPage = () => {
    const { signup, user } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState(null);

    const handleSignUp = (event) => {
        event.preventDefault();
        
        const result = signup(formData.name, formData.email, formData.password);
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

    const signupFields = [
        {
            name: "name",
            label: "Name",
            type: "text",
            placeholder: "Abiodun Olaotan"
        },
        {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "abiodunolaotan@allmart.com"
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
            icon="fa-solid fa-user-plus"
            title="Make yourself at home."
            subtitle="One account. A world of independent stores."
            error={error}
            fields={signupFields}
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSignUp}
            submitButtonText="Sign Up"
        >
        
            <p className="text-gray-600 text-sm -mt-2">Use at least 8 characters, with a number or symbol.</p>

          
            <div className="space-y-3 mt-4 text-center">
                <p className="text-gray-600 text-xs">
                    By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
                <p className="text-gray-600">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-[#13244A] hover:underline font-bold">
                        Sign in.
                    </Link>
                </p>
            </div>
        </AuthForm>
    );
};

export default SignUpPage;