"use client";

import style from '../search.module.css';
import {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

export default function Tab() {
    const [current, setCurrent] = useState('hot');
    const router = useRouter();
    const searchParams = useSearchParams();
    const onClickHot = () => {
        setCurrent('hot');
        router.replace(`/search?q=${searchParams.get('q')}`)
    }
    const onClickNew = () => {
        setCurrent('new');
        // toString은 기존에 있던 거 다 가져오고 f=live 같은 거 추가할 때 (하나 새로 추가할 때) 사용
        router.replace(`/search?${searchParams.toString()}&f=live`)
    }

    return (
        <div className={style.homeFixed}>
            <div className={style.homeTab}>
                <div onClick={onClickHot}>
                    인기
                    <div className={style.tabIndicator} hidden={current === 'new'}></div>
                </div>
                <div onClick={onClickNew}>
                    최신
                    <div className={style.tabIndicator} hidden={current === 'hot'}></div>
                </div>
            </div>
        </div>
    )
}