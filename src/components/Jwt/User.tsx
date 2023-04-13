import axios from "axios";

const TIME_OUT = 300*1000; // 5 minutes

// 에러 처리를 위한 status 선언
const statusError = {
    status: false,
    json: {
        error: ["연결이 원활하지 않습니다. 잠시 후 다시 시도해 주세요"]
    }
};

// 백으로 요청할 promis
const requestPromise = (url:any, option:any, credentials:any) => {
    return axios.post(url, credentials, option);
};

// promise 타임아웃 처리
const timeoutPromise = () => {
    return new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), TIME_OUT));
};

// promise 요청
const getPromise = async (url:URL, option:any, credentials:any) => {
    return await Promise.race([
        requestPromise(url, option, credentials),
        timeoutPromise()
    ]);
};

// 백으로 로그인 요청
export const loginUser = async (credentials:any) => {
    const option = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        },
        withCredentials: true
    };

    console.log(option);

    const loginUrl:URL = new URL('/login', process.env.REACT_APP_API_URL_ENTRY);

    const data:any = await getPromise(loginUrl, option, credentials).catch(() => {
        return statusError;
    });

    if (parseInt(String(Number(data.status) / 100))===2) {
        const status = data.status;
        const code = data.status;
        const text = await data.data();
        const json = text.length ? JSON.parse(text) : "";

        return {
            status,
            code,
            json
        };
    } else {
        return statusError;
    }
};

export const logoutUser = async (credentials:any, accessToken:any) => {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(credentials)
    };

    const loginOutUrl:URL = new URL('/loginout', process.env.REACT_APP_API_URL_ENTRY as string);

    const data:any = await getPromise(loginOutUrl, option, credentials).catch(() => {
        return statusError;
    });

    if (parseInt(String(Number(data.status) / 100))===2) {
        const status = data.ok;
        const code = data.status;
        const text = await data.text();
        const json = text.length ? JSON.parse(text) : "";

        return {
            status,
            code,
            json
        };
    } else {
        return statusError;
    }
}