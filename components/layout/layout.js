import Header from "../header/header";

const Layout = (props) => {
  return (
    <>
    <Header/>
     <main>
     {props.children}
    </main>
    </>
  )
}
export default Layout;