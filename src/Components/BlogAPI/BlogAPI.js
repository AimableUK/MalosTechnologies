import useSWR from 'swr';

const API_URL = `https://newsapi.org/v2/top-headlines?category=technology&sortBy=popularity&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
};

export const useBlogs = () => {
    const { data, error } = useSWR(API_URL, fetcher);

    return {
        blogs: data?.articles || [],
        isLoading: !data && !error,
        isError: error,
    };
};
