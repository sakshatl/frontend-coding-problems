import { useEffect, useState } from "react";

export function useFetch(url, fetcher) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [cache, setCache] = useState({ });

  useEffect(() => {
    const handler = async () => {
      try {
        // check if the data already exists in cache
        if(cache[url]) {
          setData(cache[url]);
          return;
        }

        setLoading(true); // start loading
        const data = await fetcher(url);
        setData(data); // data
        setCache((prev) => ({...prev, [url]: data})); // data to cache
      } catch (err) {
        console.log(err);
        setError(err); // error
      } finally {
        setLoading(false); // end loading
      }
    }

    handler();
  }, [url]);

  console.log(cache);

  return { data, error, loading };
}