import React from 'react'
import styles from './Header.module.css'
function Header() {
  return (
    <>
    <header className={styles.header}>
      <h3>This is Heading</h3>
      <nav>
        <a href="/" className={styles.link}>Login</a>
        <a href="/signup" className={styles.link}>Signup</a>
      </nav>
      </header>
    </>
     
    
  )
}

export default Header