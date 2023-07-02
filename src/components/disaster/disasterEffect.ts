import { food, happiness, population } from "../../composables/resource";
import convertToInteger from "../../utils/convertToInteger";

export const disasterEffect = [
    {
        "bloodMoon": {
            "food": convertToInteger(-food.total.value * (0.8 * Math.random() / 1.5)),
            "population": convertToInteger(-population.value * (1.2 * Math.random() / 1.5)),
            "happiness": convertToInteger(-happiness.total.value * (1.4 * Math.random() * 2))
        },
    },
    {
        "storm": {
            "food": convertToInteger(-food.total.value * (1.4 * Math.random() / 1.5)),
            "population": convertToInteger(-population.value * (0.7 * Math.random() / 1.5)),
            "happiness": convertToInteger(-happiness.total.value * (0.8 * Math.random() * 2))
        }
    }
]