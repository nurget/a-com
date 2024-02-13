export { auth as middleware } from "./auth";

// See "Matching Paths" below to learn more
export const config = {
    // middleware를 적용할 라우트
    matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
}