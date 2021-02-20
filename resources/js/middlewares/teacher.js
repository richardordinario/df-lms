
export default function teacher({next}) {
    if(!localStorage.getItem('token')) {
        return window.location.href = '/login'
    }
    return next()
}
