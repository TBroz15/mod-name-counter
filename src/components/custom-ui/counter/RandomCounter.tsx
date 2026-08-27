import { createSignal, onMount } from "solid-js";
import NumberFlow from "solid-number-flow";

export interface RandomCounterProps {
    digits: number;
}

export function RandomCounter(props: RandomCounterProps) {
    const [counter, setCounter] = createSignal(0);

    onMount(() => {
        const minNum = 10 ** (props.digits - 1);
        const maxNum = minNum * 8.999999999999;

        setInterval(() => {
            const randomNumber = Math.round(Math.random() * maxNum) + minNum;
            setCounter(randomNumber);
        }, 100);
    });

    return (
        <NumberFlow
            class="font-[JetBrains_Mono] font-black"
            value={Math.round(counter())}
            opacityTiming={{ duration: 100, easing: "linear(0, 1)" }}
        />
    );
}
