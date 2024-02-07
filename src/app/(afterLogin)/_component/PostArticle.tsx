"use client";

import style from './post.module.css';
import {ReactNode} from "react";
import {useRouter} from "next/navigation";

type Props = {
    children: ReactNode,
    post: {
        postId: number,
        content: string,
        User: {
            id: string,
            nickname: string,
            image: string
        },
        createdAt: Date,
        Images: any[], // 진짜 타입으로 바꿔줘야 함
    }
}
export default function PostArticle({ children, post }: Props) {
    const router = useRouter();
    const onClick = () => {
        // article을 클릭했을 때 상세 페이지 주소로 넘어가짐
        router.push(`/${post.User.id}/status/${post.postId}`);
    }

    return (
        // onClickCapture -> 이벤트 캡처링
        // user name을 클릭해도 상세페이지로 가던 부분, 클릭 이벤트랑 a 태그랑 겹치면 이벤트 캡처링 활용하면 좋음
        <article onClickCapture={onClick} className={style.post}>{children}</article>
    );
}