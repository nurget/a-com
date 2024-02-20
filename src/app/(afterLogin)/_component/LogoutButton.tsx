"use client";
import style from "./logoutButton.module.css";
import {signOut, useSession} from "next-auth/react";
import {router} from "next/client";
import {useRouter} from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();
    const {data: me} = useSession();
    console.log('me', me);
    // const me = {
    //     // 임시로 내 정보 있는 것처럼
    //     id: 'nurget',
    //     nickname: '휴지짱',
    //     image: '/profile.png'
    // }

    const onLogout = () => {
        signOut({redirect: false})
            .then(() => {
                router.replace('/');
            });
    }

    if (!me?.user) {
        return null;
    }

    return (
        <button className={style.logoutButton} onClick={onLogout}>
            <div className={style.logoutUserImage}>
                {/* !를 붙이는 건 얘가(image) 무조건 있어! -> as string을 사용해도 되긴 함 */}
                <img src={me.user?.image!} alt={me.user?.email as string}/>
            </div>
            <div className={style.logoutUserName}>
                <div>{me.user?.name}</div>
                <div>@{me.user?.email}</div>
            </div>
        </button>
    )
}