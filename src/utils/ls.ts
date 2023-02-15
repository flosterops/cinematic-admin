const setLs = (key: string, value: any) => {
  return window.localStorage.setItem(key, value);
};

const getLs = (key: string) => {
  return window.localStorage.getItem(key);
};

const getLsToken = () => {
  const token = getLs('token');
  if (!token) {
    return '';
  }

  return `Bearer ${token}`;
};

export { setLs, getLs, getLsToken };
