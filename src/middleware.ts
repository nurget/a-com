import {auth} from "@/auth";
import {NextResponse} from "next/server";

export async function middleware() {
    const session = await auth();
    // session이 없으면 로그인 페이지로 redirect
    if(!session) {
        return NextResponse.redirect(`http://localhost:3000/i/flow/login`)
    }
}
// See "Matching Paths" below to learn more
export const config = {
    // middleware를 적용할 라우트
    matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
}