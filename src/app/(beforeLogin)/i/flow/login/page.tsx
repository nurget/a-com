"use client"; // 서버 컴포넌트를 클라이언트 컴포넌트로 바꾸는 법, Next가 처리

import { useState } from "react";
import LoginModal from "@/app/(beforeLogin)/_component/LoginModal";

export default function Page() {
    return (
        <LoginModal /> 
    )
}