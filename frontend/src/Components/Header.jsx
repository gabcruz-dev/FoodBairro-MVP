import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'


const Header = () => {
   return (
      <header className={styles.header}>
         <nav className={`${styles.nav} container`}>
            <div>
               <Link className={styles.logo} to="/" aria-label='Home'>Food Bairro</Link>
            </div>
            <div>
               <Link className={styles.navegator} to={"/estabelecimentos"}>Estabelecimentos</Link>
               <Link className={styles.navegator} to={"/admin"}>Admin</Link>
            </div>
         </nav>
      </header>
   );
};

export default Header;
