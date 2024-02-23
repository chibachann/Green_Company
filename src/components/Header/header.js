import * as React from "react"
import { Link } from "gatsby";
import * as styles from './header.module.css'
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className={ styles.header }> 
    <div className={styles.logo}> 
      
      <StaticImage 
        src="../../images/logo.svg" 
        alt="ロゴ" 
        layout="constrained"
        height={50}
        />
      <h1 className={styles.logoTitle}>Green Company</h1> 
    </div>
    <nav className={styles.nav}> 
      <Link className={styles.navLink} to="/">いえ</Link> {/* Use style.navLink */}
      <Link className={styles.navLink} to="/services">事業内容</Link> {/* Use style.navLink */}
      <Link className={styles.navLink} to="/about">企業説明</Link> {/* Use style.navLink */}
      <Link className={styles.navLink} to="/contact">お問い合わせ</Link> {/* Use style.navLink */}
    </nav>
  </header>
);

export default Header;
