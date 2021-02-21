
export default function student({next}) {
    if(!localStorage.getItem('token')) {
        return window.location.href = '/login'
    }
    return next()
}
