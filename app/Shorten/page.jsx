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
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({ url, ShortURL })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    fetch("/api/generate", requestOptions)
      .then(response => response.json())
      .then(result => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${ShortURL}`)
        seturl("")
        setShortURL("")
        fetchAllUrls()
        alert(result.message)
      })
      .catch(error => console.error(error))
  }

  return (
    <div className="mb-10 px-4">
      <main className="mx-auto w-full max-w-screen-sm bg-gradient-to-br from-purple-500 to-indigo-900 min-h-150 flex flex-col text-white p-6 rounded-lg shadow-lg mt-10 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold hover:scale-105 transform transition-transform duration-300 text-center sm:text-left">
          Generate your URLs here👇!!
        </h1>

        <div className="flex flex-col gap-4">
          <label className="font-semibold">Enter URL:</label>
          <input
            type="text"
            value={url}
            placeholder="Enter your URL here..."
            className="bg-white w-full p-3 focus:outline-pink-500 rounded-md hover:scale-110 transform duration-300 placeholder:text-gray-400 text-black"
            onChange={e => seturl(e.target.value)}
          />

          <label className="font-semibold">Enter preferred URL:</label>
          <input
            type="text"
            value={ShortURL}
            placeholder="Enter your preferred URL here..."
            className="bg-white w-full p-3 focus:outline-pink-500 rounded-md hover:scale-110 transform duration-300 placeholder:text-gray-400 text-black"
            onChange={e => setShortURL(e.target.value)}
          />

          <button
            onClick={generate}
            className="bg-gradient-to-br from-purple-500 to-pink-900 text-white py-2 rounded-md hover:scale-110 transform duration-300"
          >
            Generate
          </button>
        </div>

        <div className="flex flex-col gap-3 justify-around text-base sm:text-lg mt-6 bg-blue-300 rounded-2xl p-4 text-white">
          <h2 className="text-xl sm:text-2xl font-bold transform hover:scale-105 duration-300 ease-in-out">
            All Short URLs:
          </h2>
          <ul className="flex flex-col gap-2">
            {allUrls.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center p-2 rounded-md shadow-md bg-white"
              >
                <Link
                  target="_blank"
                  href={`${item.ShortURL}`}
                  className="text-blue-600 hover:underline break-all"
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
