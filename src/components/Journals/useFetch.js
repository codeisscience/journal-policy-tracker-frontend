/* eslint-disable arrow-body-style */
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [journalFetch, setJournalFetch] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
          .then(res => {
            if(!res.ok){
                throw Error("could not fetch the data for that resource");
            }
            return res.json();
          })
          .then((data) => {
            setJournalFetch(data);
            setIsPending(false);
            setError(null);
          })
          .catch(err => {
            setError(err.message);
            setIsPending(false);
          })
    }, [url]);

    return { journalFetch, isPending, error };
}

export default useFetch;