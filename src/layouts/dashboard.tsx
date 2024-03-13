import React from 'react'

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
  return (
    <>
        <> // Header
            <main>{children}</main>
        </> // Footer
    </>
  )
}

export default DashboardLayout