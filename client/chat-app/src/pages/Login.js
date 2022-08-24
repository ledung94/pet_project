import Login from "../components/Login"
import React from "react";
import {Link} from "react-router-dom";

export default function LoginPage() {
    return (
        <>
            <div className=" flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="mb-10">
                        <div className="flex justify-center">
                            <img
                                alt=""
                                className="h-14 w-14"
                                src={require('../assets/img/favicon.png')}/>
                        </div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Login to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 mt-5">
                            Don't have an account yet?&nbsp;
                            <Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500">
                                Signup
                            </Link>
                        </p>
                    </div>
                    <Login/>
                </div>
            </div>
        </>
    )
}