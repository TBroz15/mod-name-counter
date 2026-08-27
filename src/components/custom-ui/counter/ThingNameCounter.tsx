import type { CounterProps } from "./CounterProps";
import { DefaultCounter } from "./DefaultCounter";

export function ThingNameCounter(props: CounterProps) {
    return (
        <DefaultCounter
            amountPerSec={props.amountPerSec}
            initialAmount={props.initialAmount}
            updatedDate={props.updatedDate}
        />
    );
}
