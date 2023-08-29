import { FC } from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';
import { HEADER_LINKS } from '../../config/constants';
import { EAppRoutes } from '../../types/types';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href={EAppRoutes.MAIN}>Biruang</Link>
      <ul>
        {HEADER_LINKS.map((el) => (
          <li>
            <Link href={el.href}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
