export const getDarkModeSetting = (): boolean => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedMode = window.localStorage.getItem("isDarkModeSet");
    let parsedStoreValue = false;

    if (storedMode) {
      parsedStoreValue = JSON.parse(storedMode);
    }

    const browserSettings = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (parsedStoreValue || browserSettings) {
      return true;
    }
  }
  return false;
};

export const storeBrowserPreferenceInStorage = (darkMode: boolean) => {
  window.localStorage.setItem("isDarkModeSet", JSON.stringify(darkMode));
};

export const getRandomID = () => Math.ceil(Math.random() * 1000000000);

export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);
