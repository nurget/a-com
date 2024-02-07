"use client";

import style from "@/app/(afterLogin)/messages/message.module.css";
import {faker} from "@faker-js/faker";
import {useRouter} from "next/navigation";
import dayjs from "dayjs";
import 'dayjs/locale/ko';
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale('ko');
export function Room() {
    const router = useRouter();
    const user = {
        id: 'EXY_S2',
        nickname: 'EXY',
        Messages: [
            {roomId: 123, content: '안뇽!', createdAt: new Date()},
            {roomId: 123, content: '잘가!', createdAt: new Date()},
        ]
    }

    const onClick = () => {
        router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
    }

    return (
        <div className={style.room} onClickCapture={onClick}>
            <div className={style.roomUserImage}>
                <img src={faker.image.avatar()} alt=""/>
            </div>
            <div className={style.roomChatInfo}>
                <div className={style.roomUserInfo}>
                    <b>{user.nickname}</b>
                    &nbsp;
                    <span>@{user.id} </span>
                    ·
                    &nbsp;
                    <span className={style.postDate}>
                        {dayjs(user.Messages.at(-1)?.createdAt).fromNow(true)}
                    </span>
                </div>
                <div className={style.roomLastChat}>
                    {user.Messages?.at(-1)?.content}
                </div>
            </div>
        </div>
    )
}