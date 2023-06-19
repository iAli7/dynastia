import { ref } from "vue"

const store = {
    population: ref(1),
    happiness: ref(0),
    food: ref(500),
    buffFood: ref(0)
}

export default store