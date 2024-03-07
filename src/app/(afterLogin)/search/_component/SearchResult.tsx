"use client";

import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from '@/model/Post';
import {getSearchResult} from "@/app/(afterLogin)/search/_lib/getSearchResult";
import {useQuery} from "@tanstack/react-query";
import { QueryCache} from "@tanstack/react-query";
import {string} from "prop-types";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type Props = {
    searchParams: { q: string, f?: string, pf?: string };
}
export default function SearchResult({ searchParams}: Props) {
    const {data} = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, Props['searchParams']]>({
        // '휴지'를 검색하면 query key가 posts search 휴지
        queryKey: ["posts", "search", searchParams],
        queryFn: getSearchResult,
        staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
        gcTime: 300 * 1000,
    });

    console.log("data", data);
    const queryCache = new QueryCache({
        onError: (error) => {
            console.log(error)
        },
        onSuccess: (data) => {
            console.log(data)
        },
        onSettled: (data, error) => {
            console.log(data, error)
        },
    })

    const query = queryCache.findAll();


    return data?.map((post) => (
        <Post key={post.postId} post={post} />
    ))
}