import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import {useDisaster} from "../components/disaster/useDisaster"

export default defineStore('day', () => {
  const day = useStorage("day", 1 as number);

  const addDay = () => {
    if (day.value !== null && day.value !== undefined) {
      day.value += 1;
      useDisaster().handleDisasterProcess()
    }
  };

  return {
    value: day,
    addDay
  };
});
