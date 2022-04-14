import React from 'react'
import UserCart from '../../components/UserCart/UserCart'

export default function Home() {

  const users = [
    {
      name: 'John Deo',
      age: '30'
    },
    {
      name: 'Masha',
      age: '15'
    },
    {
      name: 'Janat Doe',
      age: '36'
    },
    {
      name: 'hello',
      age: '100'
    },
  ]

  return (
    <section className='home'>
      <div className="container">
        <h1>Home Page</h1>
        {/* <h2>Our Users</h2>
        <div className="container">
          {users.map((user, idx) => {
            return <UserCart
              userName={user.name}
              userAge={user.age}
              key={`${idx}-${user.name}`} />
          })
          }
        </div> */}
      </div>

    </section>
  )
}
