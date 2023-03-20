import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from "./Nav.module.css"

export const Nav: FC = () => {
  return <nav>
    <ul className={styles.nav}>
      <li className={styles.navItem}>
        <Link to="/programs">Programs</Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/residents">Residents</Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/create-program">Create Program</Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/create-resident">Create Resident</Link>
      </li>
    </ul>
  </nav>
}