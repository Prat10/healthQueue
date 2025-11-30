
 const Layout = ({children}: {children : React.ReactNode}) => {
       return (
        <>
         <div>Dashboard</div>
         <div>
            {children}
        </div>
        </>
       )
}

export default Layout;