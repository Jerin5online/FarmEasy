import React, { createContext, useState } from 'react'


export const isAuthtokenContext = createContext()
export const userprodetailsContext = createContext()
export const addNewsResponseContext = createContext()
export const addProductResponseContext = createContext()


const ContextShare = ({children}) => {
  const [addProductResponse,setAddProductResponse] =  useState({})
    const [isAuthtken,setIsAuthtoken] = useState(true)
    const [editprofile,setEditprofile] = useState({})
    const [addNewsResponse , setAddNewsResponse] = useState({})
  
  return (
    <>
    <isAuthtokenContext.Provider value={{isAuthtken, setIsAuthtoken}}>
      <userprodetailsContext.Provider value={{editprofile, setEditprofile}}>
      <addNewsResponseContext.Provider value={{addNewsResponse , setAddNewsResponse}}>
       <addProductResponseContext.Provider value={{addProductResponse,setAddProductResponse}}> {children}</addProductResponseContext.Provider>
        </addNewsResponseContext.Provider>
      </userprodetailsContext.Provider>
    </isAuthtokenContext.Provider>
    </>
  )
}

export default ContextShare
