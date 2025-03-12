import useSWR from "swr"
import { api } from "./api"

export function srw(url: string) {
  const fetcher = async () => {
    // setTimeout(async () => {
    // // }, 10)
    // const cachedData = localStorage.getItem(url);
    // if (cachedData) return JSON.parse(cachedData);
    await new Promise(res => setTimeout(res, 2000))

    const { data } = await api.get(url)

    // localStorage.setItem(url, JSON.stringify(data));

    return data

  }
  return useSWR(url, fetcher)
}