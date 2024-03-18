import React, { createContext } from 'react'


export const isAuthtokenContext = createContext()
export const userprodetailsContext = createContext()

const ContextShare = ({children}) => {
       const [isAuthtken,setIsAuthtoken] = useState(true)
    const [editprofile,setEditprofile] = useState({})
  return (
    <>
    <isAuthtokenContext.Provider value={{isAuthtken,setIsAuthtoken}}>
      <userprodetailsContext.Provider value={{editprofile,setEditprofile}}>
      {children}
      </userprodetailsContext.Provider>
    </isAuthtokenContext.Provider>
    </>
  )
}

export default ContextShare
