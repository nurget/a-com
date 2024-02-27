"use client";

import {useQuery} from "@tanstack/react-query";
import {getPostRecommend} from "@/app/(afterLogin)/home/_lib/getPostRecommend";
import Post from "@/app/(afterLogin)/_component/Post";
import {Post as IPost} from "@/model/Post";

export default function PostRecommends() {
    const { data } = useQuery<IPost[]>({
        queryKey: ['posts', 'recommends'],
        queryFn: getPostRecommend,
        staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준 기본값 0 (단위: ms) infinity는 항상 fresh
        gcTime: 300 * 1000
    });

    return data?.map((post) => (
        <Post key={post.postId} post={post} />
    ))
}