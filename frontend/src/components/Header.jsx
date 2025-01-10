import React from 'react'
import styles from './Header.module.css'
function Header() {
  return (
    <>
    <header className={styles.header}>
      <h1>This is Heading </h1>
      <nav>
        <a href="/" className={styles.link}>Login</a>
        <a href="/signup" className={styles.link}>Signup</a>
      </nav>
      </header>
    </>
     
    
  )
}

export default Header