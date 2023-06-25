export const useTick = (callback: Function | (() => void), time: number) =>{
    const intervalId = setInterval(callback, time);
    return () => clearInterval(intervalId);
}