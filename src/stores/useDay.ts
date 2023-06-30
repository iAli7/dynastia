import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export default defineStore('day', () => {
  const day = useStorage("day", 1 as number);

  const addDay = () => {
    if (day.value !== null && day.value !== undefined) {
      day.value += 1;
    }
  };

  return {
    value: day,
    addDay
  };
});
