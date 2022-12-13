import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';

const API_URL = 'https://opendata.concordia.ca/API/v1/library/occupancy/';
const API_USERNAME = '520';
const API_PASSWORD = '276377ba5206683e51d50fb86c378dc5';

export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

export default function Layout({ children }) {
    


  // const setAppTheme = () => {
  //   const darkMode = localStorage.getItem('theme') === 'dark';
  //   const lightMode = localStorage.getItem('theme') === 'light';

  //   if (darkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else if (lightMode) {
  //     document.documentElement.classList.remove('dark');
  //   }
  //   return;
  // };

  // const handleSystemThemeChange = () => {
  //   var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  //   darkQuery.onchange = (e) => {
  //     if (e.matches) {
  //       document.documentElement.classList.add('dark');
  //       localStorage.setItem('theme', 'dark');
  //     } else {
  //       document.documentElement.classList.remove('dark');
  //       localStorage.setItem('theme', 'light');
  //     }
  //   };
  // };

  useEffect(() => {
    setAppTheme();
  }, []);

  useEffect(() => {
    handleSystemThemeChange();
  }, []);

  
  return (
    <div className="relative pb-24 overflow-hidden">
      <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
        {children}
      </div>
    </div>
  );
}
