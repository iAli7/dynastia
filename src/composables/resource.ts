import { ref } from "vue";
import useNumberMap from "./useNumberMap";

export const food = useNumberMap("food", { base: 10 })
export const happiness = useNumberMap("happiness")
export const population = ref(Number(localStorage.getItem("population")) || 1);
export const gold = useNumberMap("gold", { base: 500 })