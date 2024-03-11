import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import Adminheader from './Adminheader';

function Adminhome() {
  return (
    <>
      <div className='d-flex'>
        <Adminheader/>
       {/*  div
         <div className='mt-5 ms-5'>
           <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: 'series A' },
                { id: 1, value: 15, label: 'series B' },
                { id: 2, value: 20, label: 'series C' },
              ],
            },
          ]}
          width={400}
          height={200}
        />
         </div>
         <div className='ms-5'>
         <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
         </div> */}
         <div className='dashboard'>
          <div className='mt-5 ms-5 p-2'>
            <h1 className='ms-3'>WELCOME ADMIN</h1>
          </div>
          <div className='mt-5 d-flex'>
            <div className='piechart mt-5'>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: 'Cancelled' },
                      { id: 1, value: 15, label: 'Available' },
                      { id: 2, value: 20, label: 'Booked' },
                    ],
                  },
                ]}
                width={400}
                height={200}
              />
            </div>
            <div className='me-5 mb-5 ms-5'>
                  <h2 className='mt-5 text-center'>Scheduled Trains</h2>
              <BarChart
                series={[
                  { data: [35, 44, 24, 34] },
                  { data: [51, 6, 49, 30] },
                  { data: [15, 25, 30, 50] },
                  { data: [60, 50, 15, 25] },
                ]}
                height={290}
                width={500}
                xAxis={[{ data: ['17/03/2024', '18/03/2024', '19/03/2024', '20/03/2024'], scaleType: 'band' }]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              />
            </div>
          </div>
       </div>
      </div>
       
    </>
  )
}

export default Adminhome
