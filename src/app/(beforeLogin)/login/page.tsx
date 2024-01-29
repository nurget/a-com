"use client";

import {redirect, useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
    // 서버에서 리다이렉트, 인터셉팅이 제대로 되지 않음
    // 클라이언트에서 링크를 통해 리다이렉트 해야 제대로 됨
    // redirect('/i/flow/login'); -> 클라이언트일 때는 작동 안하겠지?

    const router = useRouter();
    router.replace('/i/flow/login');
    return (
        <Main />
    );
}

// push와 replace의 차이점

// router.push
// localhost:3001/login -> localhost:3001/login -> localhost:3001/i/flow/login

// 뒤로가기 하면 두 번째(localhost:3001/login)으로 가는데 위에 함수 보면 다시 /i/flow/login으로 가게 됨
// 이렇게 뒤로가기 하고 돌아가는게 무한반복 되버림

// router.replace
// localhost:3001/login-> router.replace -> localhost:3001/i/flow/login

// replace는 이동 후에 뒤로가기 누르면 이전 히스토리를 대체함
// localhost:3001/login-> localhost:3001/i/flow/login (대체)
