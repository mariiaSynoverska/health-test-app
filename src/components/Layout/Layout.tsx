import { FC, Fragment, ReactNode, useCallback, useState } from 'react';

import Button from '@mui/material/Button';

import { Nav } from '../Nav';

import { authHeader } from '../../service/auth';
import { getToken, config } from '../../api';

import styles from "./Layout.module.css";
import logo from "../../assets/images/logo.jpeg";

interface ILayout {
  title: string,
  children: ReactNode
};

export const Layout: FC<ILayout> = ({ title, children }) => {
  const [header, setHeader] = useState(() => authHeader());

  const handleLogin = useCallback(async () => {
    await getToken(config.TEST_USER);
    setHeader(authHeader());
  }, []);

  return <>
    <header className={styles.header}>
      <img src={logo} alt="Health care" className={styles.logo} />
      <Nav />
      <div className={styles.login}>
        {!header ? <Button
          variant="contained"
          sx={{ m: 1 }}
          size="medium"
          onClick={handleLogin}>Login</Button> : <span>{config.TEST_USER}</span>}
      </div>
    </header>
    <main className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </main>
  </>
}
