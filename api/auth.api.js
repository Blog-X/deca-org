import AxiosJsInstance from "../hooks/AxiosInstance"

const login = async (request) => {
    try {
        const {data}  = await AxiosJsInstance.post("/auth/login", request);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

const signup = async (request) => {
    try {
        const {data}  = await AxiosJsInstance.post("/auth/signup", request);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export {
    login,
    signup
}