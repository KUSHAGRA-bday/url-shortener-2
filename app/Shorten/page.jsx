"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, seturl] = useState("")
  const [ShortURL, setShortURL] = useState("")
  const [generated, setGenerated] = useState("")
  const [allUrls, setAllUrls] = useState([])

  const fetchAllUrls = async () => {
    const res = await fetch('/api/urls')
    const data = await res.json()
    setAllUrls(data.urls)
  }

  useEffect(() => {
    fetchAllUrls()
  }, [])

  const generate = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "ShortURL": ShortURL
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${ShortURL}`)
        seturl("")
        setShortURL("")
        fetchAllUrls()
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="mb-7">
      <main className="mx-auto w-full max-w-lg bg-gradient-to-br from-purple-500 to-indigo-900 min-h-150 flex flex-col text-white p-3 sm:p-5 rounded-lg shadow-lg mt-6 sm:mt-10 gap-3">
        <h1 className="text-xl sm:text-3xl font-bold hover:scale-105 transform transition-transform ml-2 sm:ml-10 duration-300 ease-in-out">
          Generate your URLs here👇!!
        </h1>
        <div className="flex flex-col gap-3">
          <b>Enter URL:</b>
          <span className="transform hover:scale-105 duration-300 ease-in-out w-auto">
            <input
              type="text"
              value={url}
              placeholder="Enter your URL here..."
              className="bg-white w-full p-2 sm:p-3 focus:outline-pink-500 rounded-md placeholder:text-gray-400 text-black text-sm sm:text-base"
              onChange={e => { seturl(e.target.value) }}
            />
          </span>
          <b>Enter preferred URL:</b>
          <span className="transform hover:scale-105 duration-300 ease-in-out w-auto">
            <input
              type="text"
              value={ShortURL}
              placeholder="Enter your preferred URL here..."
              className="bg-white w-full p-2 sm:p-3 focus:outline-pink-500 rounded-md placeholder:text-gray-400 text-black text-sm sm:text-base"
              onChange={e => { setShortURL(e.target.value) }}
            />
          </span>
          <button
            onClick={generate}
            className="bg-gradient-to-br from-purple-500 to-pink-900 text-white p-2 rounded-md cursor-pointer mx-0 sm:mx-45 transform duration-300 ease-in-out hover:scale-110"
          >
            Generate
          </button>
        </div>
        <div className="flex flex-col gap-3 justify-around text-base sm:text-lg mt-3 bg-blue-300 rounded-2xl p-2 sm:p-3">
          <div>
            <h2 className="text-lg sm:text-2xl font-bold transform hover:scale-105 duration-300 ml-1 sm:ml-2.5 ease-in-out">
              All Short URLs:
            </h2>
          </div>
          <ul className="flex flex-col gap-2">
            {allUrls.map((item, idx) => (
              <li key={idx} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 rounded-md shadow-md">
                <Link
                  target="_blank"
                  href={`/${item.ShortURL}`}
                  className="text-blue-600 hover:underline w-fit bg-zinc-100 rounded-md p-1 text-center break-all"
                >
                  {item.ShortURL}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Shorten