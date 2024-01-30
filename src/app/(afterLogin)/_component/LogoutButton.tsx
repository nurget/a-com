"use client";
import style from "./logoutButton.module.css";

export default function LogoutButton() {
    const me = {
        // 임시로 내 정보 있는 것처럼
        id: 'nurget',
        nickname: '휴지짱',
        image: '/profile.png'
    }

    const onLogout = () => {

    }

    return (
        <button className={style.logoutButton} onClick={onLogout}>
            <div className={style.logoutUserImage}>
                <img src={me.image} alt={me.id} />
            </div>
            <div className={style.logoutUserName}>
                <div>{me.nickname}</div>
                <div>@{me.id}</div>
            </div>
        </button>
    )
}