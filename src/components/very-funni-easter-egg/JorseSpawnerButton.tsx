import { createSignal } from "solid-js";
import { ABDUCTOR_IMAGE_ID, HORSE_IMAGE_ID } from "../../consts";
import { animate } from "motion";

const HORSE_IMAGE_SELECTOR_BODY = `:scope > main > picture > #${HORSE_IMAGE_ID}`;
const ABDUCTOR_IMAGE_SELECTOR_BODY = `:scope > main > picture > #${ABDUCTOR_IMAGE_ID}`;

const ABDUCTOR_SHAKE_REPEATS = 50;
const ABDUCTOR_SHAKE_DURATION = 3.5;

const HORSE_SHAKE_REPEATS = 10;
const HORSE_SHAKE_DURATION = 1;

export function JorseSpawnerButton() {
    const [isAnimationRunning, setAnimationRunning] = createSignal(false);

    const playAnimation = async () => {
        if (isAnimationRunning()) return;
        setAnimationRunning(true);

        const horseImage = document.body.querySelector(
            HORSE_IMAGE_SELECTOR_BODY,
        );
        const abductorImage = document.body.querySelector(
            ABDUCTOR_IMAGE_SELECTOR_BODY,
        );

        await animate(
            horseImage,
            { "--tw-translate-x": "0%", rotate: 0 },
            { duration: 5, ease: "linear" },
        );

        await animate(
            abductorImage,
            { rotate: 10, "--tw-translate-y": "-5%" },
            { duration: 0.5, ease: "circOut" },
        );

        animate(
            abductorImage,
            {
                rotate: [10, 11, 9, 10],
            },
            {
                duration: ABDUCTOR_SHAKE_DURATION / ABDUCTOR_SHAKE_REPEATS,
                repeat: ABDUCTOR_SHAKE_REPEATS,
            },
        );

        animate(
            horseImage,
            {
                x: [0, 4, -4, 0],
                scale: [100, 98, 99, 100],
            },
            {
                duration: HORSE_SHAKE_DURATION / HORSE_SHAKE_REPEATS,
                repeat: HORSE_SHAKE_REPEATS,
            },
        );

        await animate(
            horseImage,
            {
                rotate: [0, 30],
                "--tw-translate-x": "85vw",
                scale: "0px",
            },
            {
                ease: "circIn",
                duration: 1,
                delay: 1,
            },
        );

        await animate(
            abductorImage,
            { rotate: 0, "--tw-translate-y": "100%" },
            { duration: 0.5, ease: "easeIn", delay: 1 },
        );

        // forcibly put back the *hrse quickly and silently
        await animate(
            horseImage,
            {
                rotate: 0,
                x: 0,
                y: 0,
                "--tw-translate-x": "-100%",
            },
            {
                duration: 0.01,
            },
        );

        await animate(
            horseImage,
            {
                scale: "100%",
            },
            {
                duration: 0.01,
            },
        );

        setAnimationRunning(false);
    };

    return (
        <div class="contents">
            <button
                type="button"
                class="text-lime-200 hover:text-lime-400 underline"
                onClick={() => {
                    playAnimation();
                }}
            >
                {">"} h*rse walks in
            </button>
        </div>
    );
}
