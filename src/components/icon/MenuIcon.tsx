import Constants from '@/constants';
import {useEffect, useState} from 'react';

type MenuIconProps = {
  menuType: number
  selected: boolean,
}
const MenuIcon = ({menuType, selected}: MenuIconProps) => {
  const [fillColor, setFillColor] = useState('');
  useEffect(() => {
    setFillColor(selected ? 'rgba(28, 28, 30, 1)' : 'rgba(229, 229, 234, 1)');
  }, [selected]);

  const menuNums = Constants.mainpage.menu_nums;
  const getIcon = () => {
    switch (menuType) {
      case menuNums.MENU_HOME:
        return (<svg width="31" height="30" viewBox="0 0 31 30" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {/* eslint-disable-next-line max-len */}
          <path d="M8 23.75H11.75V17.5C11.75 17.1458 11.8698 16.849 12.1094 16.6094C12.349 16.3698 12.6458 16.25 13 16.25H18C18.3542 16.25 18.651 16.3698 18.8906 16.6094C19.1302 16.849 19.25 17.1458 19.25 17.5V23.75H23V12.5L15.5 6.875L8 12.5V23.75ZM5.5 23.75V12.5C5.5 12.1042 5.58854 11.7292 5.76562 11.375C5.94271 11.0208 6.1875 10.7292 6.5 10.5L14 4.875C14.4375 4.54167 14.9375 4.375 15.5 4.375C16.0625 4.375 16.5625 4.54167 17 4.875L24.5 10.5C24.8125 10.7292 25.0573 11.0208 25.2344 11.375C25.4115 11.7292 25.5 12.1042 25.5 12.5V23.75C25.5 24.4375 25.2552 25.026 24.7656 25.5156C24.276 26.0052 23.6875 26.25 23 26.25H18C17.6458 26.25 17.349 26.1302 17.1094 25.8906C16.8698 25.651 16.75 25.3542 16.75 25V18.75H14.25V25C14.25 25.3542 14.1302 25.651 13.8906 25.8906C13.651 26.1302 13.3542 26.25 13 26.25H8C7.3125 26.25 6.72396 26.0052 6.23438 25.5156C5.74479 25.026 5.5 24.4375 5.5 23.75Z"
            fill={fillColor} />
        </svg>);
      case menuNums.MENU_STYLING:
        return (<svg width="30" height="30" viewBox="0 0 30 30" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          {/* eslint-disable-next-line max-len */}
          <path d="M8.75 27.5V20H6.75C5.91667 20 5.20833 19.7083 4.625 19.125C4.04167 18.5417 3.75 17.8333 3.75 17C3.75 16.3958 3.91667 15.8385 4.25 15.3281C4.58333 14.8177 5.02083 14.4375 5.5625 14.1875L13.75 10.5625V9.75C13 9.47917 12.3958 9.02604 11.9375 8.39062C11.4792 7.75521 11.25 7.04167 11.25 6.25C11.25 5.20833 11.6146 4.32292 12.3438 3.59375C13.0729 2.86458 13.9583 2.5 15 2.5C16.0417 2.5 16.9271 2.86458 17.6562 3.59375C18.3854 4.32292 18.75 5.20833 18.75 6.25H16.25C16.25 5.89583 16.1302 5.59896 15.8906 5.35938C15.651 5.11979 15.3542 5 15 5C14.6458 5 14.349 5.11979 14.1094 5.35938C13.8698 5.59896 13.75 5.89583 13.75 6.25C13.75 6.60417 13.8698 6.90104 14.1094 7.14062C14.349 7.38021 14.6458 7.5 15 7.5C15.3542 7.5 15.651 7.61979 15.8906 7.85938C16.1302 8.09896 16.25 8.39583 16.25 8.75V10.5625L24.4375 14.1875C24.9792 14.4375 25.4167 14.8177 25.75 15.3281C26.0833 15.8385 26.25 16.3958 26.25 17C26.25 17.8333 25.9583 18.5417 25.375 19.125C24.7917 19.7083 24.0833 20 23.25 20H21.25V27.5H8.75ZM6.75 17.5H8.75V16.25H21.25V17.5H23.25C23.3958 17.5 23.5156 17.4479 23.6094 17.3438C23.7031 17.2396 23.75 17.1042 23.75 16.9375C23.75 16.8333 23.724 16.7448 23.6719 16.6719C23.6198 16.599 23.5417 16.5417 23.4375 16.5L15 12.75L6.5625 16.5C6.45833 16.5417 6.38021 16.599 6.32812 16.6719C6.27604 16.7448 6.25 16.8333 6.25 16.9375C6.25 17.1042 6.29688 17.2396 6.39062 17.3438C6.48438 17.4479 6.60417 17.5 6.75 17.5ZM11.25 25H18.75V18.75H11.25V25Z"
            fill={fillColor} />
        </svg>);
      case menuNums.MENU_MYPAGE:
        return (<svg width="30" height="30" viewBox="0 0 30 30" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1452_2539)">
            {/* eslint-disable-next-line max-len */}
            <path d="M15 7.375C16.45 7.375 17.625 8.55 17.625 10C17.625 11.45 16.45 12.625 15 12.625C13.55 12.625 12.375 11.45 12.375 10C12.375 8.55 13.55 7.375 15 7.375ZM15 18.625C18.7125 18.625 22.625 20.45 22.625 21.25V22.625H7.375V21.25C7.375 20.45 11.2875 18.625 15 18.625ZM15 5C12.2375 5 10 7.2375 10 10C10 12.7625 12.2375 15 15 15C17.7625 15 20 12.7625 20 10C20 7.2375 17.7625 5 15 5ZM15 16.25C11.6625 16.25 5 17.925 5 21.25V23.75C5 24.4375 5.5625 25 6.25 25H23.75C24.4375 25 25 24.4375 25 23.75V21.25C25 17.925 18.3375 16.25 15 16.25Z"
              fill={fillColor} />
          </g>
          <defs>
            <clipPath id="clip0_1452_2539">
              <rect width="30" height="30" fill={fillColor} />
            </clipPath>
          </defs>
        </svg>);
      default:
        return null;
    }
  };

  return <>
    {getIcon()}
  </>;
};

export default MenuIcon;