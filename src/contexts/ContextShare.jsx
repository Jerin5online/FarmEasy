import React, { createContext, useState } from 'react'


export const isAuthtokenContext = createContext()
export const userprodetailsContext = createContext()
export const addNewsResponseContext = createContext()

const ContextShare = ({children}) => {
    const [isAuthtken,setIsAuthtoken] = useState(true)
    const [editprofile,setEditprofile] = useState({})
    const [addNewsResponse , setAddNewsResponse] = useState({})
  
  return (
    <>
    <isAuthtokenContext.Provider value={{isAuthtken, setIsAuthtoken}}>
      <userprodetailsContext.Provider value={{editprofile, setEditprofile}}>
      <addNewsResponseContext.Provider value={{addNewsResponse , setAddNewsResponse}}>
        {children}
        </addNewsResponseContext.Provider>
      </userprodetailsContext.Provider>
    </isAuthtokenContext.Provider>
    </>
  )
}

export default ContextShare
