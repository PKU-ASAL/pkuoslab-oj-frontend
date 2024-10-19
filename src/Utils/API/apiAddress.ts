export default function apiAddress() {
    // const port = "8889"

    if (process.env.NODE_ENV === 'development') return {
        CLIENT_SERVER: 'http://localhost:8889',
        MANAGE_SERVER: 'http://localhost:8889',
        FRONT_SERVER: 'http://localhost:3000',
        SOCKET_SERVER: 'ws://localhost:8889'
    }
    return {
        // CLIENT_SERVER: 'https://oj.qd.sdu.edu.cn',
        // MANAGE_SERVER: 'https://oj.qd.sdu.edu.cn',
        // FRONT_SERVER: 'https://oj.qd.sdu.edu.cn',
        // SOCKET_SERVER: "wss://oj.qd.sdu.edu.cn"
        CLIENT_SERVER: '',
        MANAGE_SERVER: '',
        FRONT_SERVER: '',
        SOCKET_SERVER: '',
    }
}
