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