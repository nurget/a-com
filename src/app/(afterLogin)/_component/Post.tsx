import Link from "next/link";
import style from './post.module.css';
import dayjs from "dayjs";
// fromNow를 쓸 수 있게 해주는 plugin
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);
dayjs.locale('ko');

export default function Post() {
    const target = {
        User: {
            id: 'nurget',
            nickname: '휴지짱',
            image: '/profile.png'
        },
        content: '트위터 게시글이야!!!',
        createdAt: new Date(),
        Images: [],
    }
    return (
        <article className={style.post}>
            <div className={style.postWrapper}>
                <div className={style.postUserSection}>
                    <Link href={`/${target.User.id}`} className={style.postUserImage}>
                        <img src={target.User.image} alt={target.User.nickname}/>
                    </Link>
                    {/* 이미지에 background-color를 줄 수 없으니까 shade를 만들어서 입힘 */}
                    <div className={style.postShade}/>
                </div>
                <div className={style.postBody}>
                    <div className={style.postMeta}>
                        <Link href={`${target.User.id}`}>
                            <span className={style.postUserName}>{target.User.nickname}</span>
                            &nbsp;
                            <span className={style.postUserId}>@{target.User.id}</span>
                            &nbsp;
                            ·
                            &nbsp;
                        </Link>
                        <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
                    </div>
                    <div>{target.content}</div>
                    <div className={style.postImageSection}>
                        {/*{target.Images.length > 0 && (*/}
                        {/*    <div className={style.postImageSection}>*/}
                        {/*        <img src={target.Image[0]?.link} alt=""/>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                    </div>
                    {/*<ActionButtons post={post}/>*/}
                </div>
            </div>
        </article>
    )
}