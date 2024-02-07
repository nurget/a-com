import {faker} from "@faker-js/faker";
import style from './chatRoom.module.css';
import Link from "next/link";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import cx from "classnames";
import dayjs from "dayjs";
import 'dayjs/locale/ko';
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale('ko');

export default function chatRoom() {
    const user = {
        id: 'EXY_S2',
        nickname: 'EXY',
        image: faker.image.avatar()
    }

    const messages = [
        {messageId: 1, roomId: 123, id: 'nurget', content: '안뇽!', createdAt: new Date()},
        {messageId: 2, roomId: 123, id: 'seoldong2', content: '잘가!', createdAt: new Date()},
    ]

    return (
        <main className={style.main}>
            <div className={style.header}>
                <BackButton/>
                <div><h2>{user.nickname}</h2></div>
            </div>
            <Link href={user.nickname} className={style.userInfo}>
                <img src={user.image} alt={user.id}/>
                <div><b>{user.nickname}</b></div>
                <div>@{user.id}</div>
            </Link>
            <div className={style.list}>
                {messages.map((m) => {
                    if (m.id === 'nurget') {
                        // 내 메시지면
                        return (
                            <div
                                key={m.messageId}
                                className={cx(style.message, style.myMessage)}>
                                <div className={style.content}>{m.content}</div>
                                <div className={style.date}>{dayjs(m.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}</div>
                            </div>
                        );
                    }
                    return (
                        <div
                            key={m.messageId}
                            className={cx(style.message, style.yourMessage)}>
                            <div className={style.content}>{m.content}</div>
                            <div className={style.date}>{dayjs(m.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}</div>
                        </div>
                    );
                })}
            </div>

        </main>
    )
}