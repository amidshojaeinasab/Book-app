import styles from "./Layout.module.css"
function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
      <h1>Book App</h1>
      <p>
        <a href="https://shojaeinasab.ir/">Shojaeinasab</a>
      </p>
    </header>
    {children}
    <footer className={styles.footer}>
      <p>Developed by Shojaeinasab</p>
    </footer>
    </>
  )
}

export default Layout