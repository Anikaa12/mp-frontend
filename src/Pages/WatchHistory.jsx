
import React from 'react'
import { Link } from 'react-router-dom'

function WatchHistory() {
  return (
    <>
         <div className="container mt-5 mb-5 d-flex justify-content-between">
          <h1>Watch History</h1>
          <Link style={{textDecoration:'none', color:'red', fontSize:'25px'}} to={'/home'}><i class="fa-solid fa-clock-rotate-left me-3"></i>Back to Home</Link>
          </div>
          <table className='table n=mb-5 container shadow w-100'>
            <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Url</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Title</td>
                <td><a href="https://youtu.be/SRXH9AbT280?si=DmaeKRRajDtCdMGw">https://youtu.be/SRXH9AbT280?si=DmaeKRRajDtCdMGw</a></td>
                <td>03/07/2024, 11:23:50 AM</td>
                <td><button><i class="fa-solid fa-trash text-danger"></i></button></td>
              </tr>
            </tbody>
          </table>
         
      </>
  )
}

export default WatchHistory