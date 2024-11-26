import { useEffect, useState } from 'react'

const useFetch = ( reloader, responder, reload) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fa8f048e48msh85f2395b701a8e0p1fd1f9jsn4284c7f85337",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  useEffect(() => {
    let eminem = [];
    let billie = [];
    let rihanna = [];
    let songs = [];

    const fetchEminem = fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem",
      options
    ).then((res) => res.json());
    const fetchBillie = fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=billie%20eilish",
      options
    ).then((res) => res.json());
    const fetchRihanna = fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=rihanna",
      options
    ).then((res) => res.json());

    Promise.all([fetchEminem, fetchBillie, fetchRihanna])
      .then((res) => {
        eminem = res[0].data;
        billie = res[1].data;
        rihanna = res[2].data;
        songs = [eminem, billie, rihanna];
        if (!res[0].data || !res[1].data || !res[2].data) {
          reloader()
          console.log("wrong");
        } else {
          console.log('success')
          console.log(songs)
          responder(songs)
        }
      })
      .catch((err) => console.log(err));
  },[reload])
}

export default useFetch