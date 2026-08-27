import { createSignal, onMount } from "solid-js";
import NumberFlow from "solid-number-flow";
import type { CounterProps } from "./CounterProps";

function getEstimateAmountFromDate(props: CounterProps) {
    const today = new Date();
    const offsetFromUpdated = Math.round(
        (today.getTime() - props.updatedDate.getTime()) / 1000,
    );
    const initAmount =
        props.initialAmount + offsetFromUpdated * props.amountPerSec;

    return initAmount;
}

export function DefaultCounter(props: CounterProps) {
    const [counter, setCounter] = createSignal(0);

    const startIncrementInterval = () => {
        return setInterval(() => {
            const sum = counter() + props.amountPerSec;
            setCounter(sum);
        }, 1000);
    };

    onMount(() => {
        const initAmount = getEstimateAmountFromDate(props);

        const firstInterval = setInterval(() => {
            const sum =
                counter() + Math.round((Math.random() * initAmount) / 10);

            if (sum < initAmount) {
                setCounter(sum);
                return;
            }

            clearInterval(firstInterval);

            const finalEstimate = getEstimateAmountFromDate(props);
            setCounter(finalEstimate);
            startIncrementInterval();
        }, 100);
    });

    return (
        <NumberFlow
            class="font-[JetBrains_Mono_Variable] font-black"
            value={Math.round(counter())}
            opacityTiming={{ duration: 100, easing: "linear(0, 1)" }}
        />
    );
}
