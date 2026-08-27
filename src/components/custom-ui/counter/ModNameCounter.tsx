import type { CounterProps } from "./CounterProps";
import { DefaultCounter } from "./DefaultCounter";

export function ModNameCounter(props: CounterProps) {
    return (
        <div class="drop-shadow-[0_0_128px_rgba(255,255,255,0.7)] text-7xl md:text-9xl">
            <DefaultCounter
                amountPerSec={props.amountPerSec}
                initialAmount={props.initialAmount}
                updatedDate={props.updatedDate}
            />
        </div>
    );
}
