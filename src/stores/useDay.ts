import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";

export default defineStore('day', () => {
  const day = useStorage("day", 1);

  const addDay = () => {
    day.value += 1;
  };

  return {
    value: day,
    addDay
  };
});