import { format } from 'date-fns';

export function setExpiration(minutes) {
  if (minutes) {
    const date = new Date();
    return date.getTime() + (minutes * 60 * 1000);
  }
  return 0;
}

export function storeExpiration(minutes) {
  try {
    sessionStorage.setItem('sessionTime', `${minutes}`);
  } catch (error) {
    return false;
  }
}

export function clearSession() {
  try {
    sessionStorage.clear();
  } catch (error) {
    return false;
  }
}

export function getExpiration() {
  try {
    const time = sessionStorage.getItem('sessionTime');
    if (time) return parseInt(time, 10);
    return 0;
  } catch (error) {
    return 0;
  }
}

export function checkSession(time) {
  const date = new Date();
  return time > date.getTime();
}

export function getItem(key, defaultValue = {}) {
  const res = localStorage.getItem(key);

  return res ? JSON.parse(res) : defaultValue;
}

export function setItem(key, value) {
  console.log(key, value);
  return localStorage.setItem(key, JSON.stringify(value));
}

export function encryptKey(value) {
  const str = JSON.stringify(value);
  return window.btoa(str);
}

export function decryptKey(value) {
  const str = window.atob(value);
  return JSON.parse(str);
}

export const formatISODate = (data) => {
  try {
    const convertIso = parseInt(data, 10) * 1000;
    const date = new Date(convertIso);

    const dateAndMonth = format(date, 'do MMM');
    const year = format(date, 'yyy');

    return `${dateAndMonth}, ${year}`;
  } catch (e) {
    return '';
  }
};

export const tradingView = () => {
  const script = document.createElement('script');
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
  script.async = false;
  script.innerHTML = JSON.stringify({
    "container_id": "tv-medium-widget",
    "symbols": [
      [
        "Bitcoin",
        "BITMEX:XBTUSD|1m"
      ],
      [
        "Ethereum",
        "BITMEX:ETHUSD|1m"
      ]
    ],
    "greyText": "Quotes by",
    "gridLineColor": "rgba(182, 182, 182, 0.65)",
    "fontColor": "rgba(0, 0, 0, 1)",
    "underLineColor": "rgba(60, 120, 216, 1)",
    "trendLineColor": "rgba(60, 120, 216, 1)",
    "width": "100%",
    "height": "100%",
    "locale": "en"
  });

  return script;
};
