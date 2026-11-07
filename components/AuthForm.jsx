"use client";

import Button from "@/components/Button";
import Link from "next/link";

const AuthForm = ({ 
    icon,
    title, 
    subtitle,
    error,
    fields = [], 
    formData,
    onChange,
    onSubmit, 
    submitButtonText = "Submit", 
    children,
    footerText, 
    footerLinkText, 
    footerLinkHref 
}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#E7F0FF]">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="flex flex-col items-center justify-center">
                    {icon && (
                        <div className="flex justify-center items-center w-10 h-11 rounded-[10] bg-[#E7F0FF] mb-4">
                            <i className={`${icon} text-[24px] text-black`}></i>
                        </div>
                    )}
                    <h1 className="text-3xl font-bold mb-2">{title}</h1>
                    {subtitle && <p className="text-gray-600 mb-6">{subtitle}</p>}
                </div>
                
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                
                <form onSubmit={onSubmit} className="space-y-4 w-full flex flex-col">
                    {fields.map((field) => (
                        <div key={field.name}>
                            <label htmlFor={field.name} className="block text-gray-700 mb-2 font-bold">
                                {field.label}
                            </label>
                            <input
                                type={field.type || "text"}
                                name={field.name}
                                id={field.name}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                onChange={onChange}
                                className="border border-gray-300 rounded-2xl py-4 px-4 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
                                required
                            />
                        </div>
                    ))}

                    {/* Slot for extra form elements like Remember me & Forgot Password */}
                    {children}

                    <Button
                        onClick={onSubmit}
                        label={submitButtonText}
                        className="bg-[#13244A] hover:bg-sky-800 text-white font-semibold py-4 px-4 rounded transition-colors cursor-pointer w-full"
                    />
                </form>

                {footerText && footerLinkText && footerLinkHref && (
                    <p className="text-[#6B778E] text-center mt-4">
                        {footerText}{" "}
                        <Link href={footerLinkHref} className="text-[#13244A] hover:underline font-bold">
                            {footerLinkText}
                        </Link>
                    </p>
                )}
            </div>
        </div>
    );
};

export default AuthForm;