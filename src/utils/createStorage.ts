const createStorage = <T>(key: string, defaultValue: T) => {
    let value: T = defaultValue;
  
    const itemInStorage = localStorage.getItem(key);
  
    if (itemInStorage) {
      value = JSON.parse(itemInStorage);
    }
  
    const setValue = (newValue: T) => {
      value = newValue;
      localStorage.setItem(key, JSON.stringify(newValue));
    };
  
    return {
      get value(): T {
        return value;
      },
      set value(newValue: T) {
        setValue(newValue);
      }
    };
  };
  
  export default createStorage;
  