import React from "react";
import axios from "axios";


const useLogin = () => {
    async function send(values) {
        const response = await axios.post("http://localhost:5000/api/authentication/login", values);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            window.location.reload();
        }
    }

    return send;
}

export default useLogin;