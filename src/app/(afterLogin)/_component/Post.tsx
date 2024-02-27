import Link from "next/link";
import style from './post.module.css';
import dayjs from "dayjs";
// fromNow를 쓸 수 있게 해주는 plugin
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import PostArticle from "@/app/(afterLogin)/_component/PostArticle";
import {faker} from "@faker-js/faker";
import PostImages from "@/app/(afterLogin)/_component/PostImages";
import {Post} from "@/model/Post";

dayjs.extend(relativeTime);
dayjs.locale('ko');

type Props = {
    noImage?: boolean
    post: Post
}
export default function Post({ noImage, post }: Props) {
    const target = post;

    // 50% 확률로 이미지가 있거나 없거나
    if (Math.random() > 0.5 && !noImage) {
        target.Images.push(
            // urlLoremFlickr() -> 매번 랜덤한 이미지를 뿌려줌
            {imageId: 1, link: faker.image.urlLoremFlickr()},
            {imageId: 2, link: faker.image.urlLoremFlickr()},
            {imageId: 3, link: faker.image.urlLoremFlickr()},
            {imageId: 4, link: faker.image.urlLoremFlickr()},
        )
    }

    return (
        // 부모는 클라이언트 컴포넌트
        <PostArticle post={target}>
            {/* 자식은 서버 컴포넌트 */}
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
                    <div>
                        <PostImages post={target} />
                    </div>
                    <ActionButtons/>
                </div>
            </div>
        </PostArticle>
    )
}