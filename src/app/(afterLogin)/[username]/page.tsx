import Image from "next/image";
import styles from "./page.module.css";
import style from './profile.module.css';
import Post from "@/app/(afterLogin)/_component/Post";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import {auth} from "@/auth";
import Link from "next/link";

export default async function Profile() {
    const user = {
        id: 'nurget',
        nickname: '휴지짱',
        image: '/profile.png'
    }
    return (
        <main className={style.main}>
            <div className={style.header}>
                <BackButton/>
                <h3>{user.nickname}</h3>
            </div>
            <div className={style.userZone}>
                <div className={style.userImage}>
                    <img src={user.image} alt={user.id}/>
                </div>
                <div className={style.userName}>
                    <div>{user.nickname}</div>
                    <div>@{user.id}</div>
                </div>
                <button className={style.followButton}>팔로우</button>
            </div>
            <div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>

        </main>
    );
}
