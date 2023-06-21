import { ref } from "vue"

const store = {
    population: ref(1),
    happiness: ref(0),
    food: ref(0),
    light: ref(0),
    buffLight: ref(0),
    buffFood: ref(0)
}

export default store