export const useLocalStorage = <T,>(key: string, payload: T) => {
  const characterInLocalStorage =
    JSON.parse(localStorage.getItem(key) as string) || []

  characterInLocalStorage.push(payload)
  localStorage.setItem(key, JSON.stringify(characterInLocalStorage))
}

export const useGetLocalStorage = <T,>(key: string): T[] => {
  return JSON.parse(localStorage.getItem(key) as string)
}
