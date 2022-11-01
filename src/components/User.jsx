import React, { useState, useEffect } from 'react'

const url = `https://randomuser.me/api/?page=3&results=10&seed=abc`

const User = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users.results)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <>
      <section className="w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-3">
        {users.map((user) => {
          const {
            name: { 
                first, 
                last 
            },
            location: {
              city,
              state,
              country,
              postcode,
              timezone: { offset},
            },
            login: { uuid},
            dob: { age },
            picture: { large },
          } = user

          return (
            <div key={uuid} className="bg-slate-800  text-white rounded-md p-6">
                <img src={large} className="rounded-full border-emerald-600 border-2 p-2 mx-auto" alt="" />
                <div>
                    <h1 className="text-2xl font-semibold my-4 text-center">{first} {last}, {age}</h1>
                    <ul>
                        <li className="text-lg"><span className="font-medium">Country: </span>{country}</li>
                        <li className="text-lg"><span className="font-medium">State: </span>{state}, {postcode}</li>
                        <li className="text-lg"><span className="font-medium">Timezone: </span>{offset}</li>
                    </ul>
                </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default User