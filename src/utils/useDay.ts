import { ref } from "vue";

const day = ref(Number(localStorage.getItem("day") || 1));

const useDay = () => {
  const addDay = () => {
    day.value = Number(day.value) + 1;
    localStorage.setItem("day", day.value.toString());
  };

  return {
    day,
    addDay
  };
};

export default useDay;