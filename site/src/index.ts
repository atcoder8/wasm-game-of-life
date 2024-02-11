import _ from "lodash";

import { Universe } from "wasm-ts-rust";

const CELL_SIZE = 10;
const CELL_MARGIN_SIZE = 1;

const GRID_COLOR = "#CCCCCC";
const DEAD_COLOR = "#FFFFFF";
const ALIVE_COLOR = "#000000";

const universe = Universe.new(64, 64);

let in_play = false;

let animationId: null | number = null;

const sleep = (msec: number) => new Promise(resolve => setTimeout(resolve, msec));

const autoAdvanceSpeedRange = <HTMLInputElement>document.getElementById("auto-advance-interval-range");

autoAdvanceSpeedRange.value = "50";

const autoAdvanceUniverse = async () => {
    if (in_play) {
        universe.advance_generation();
    }

    const frequency = Math.pow(2, Number(autoAdvanceSpeedRange.value) / 10);
    await sleep(1000.0 / frequency);

    autoAdvanceUniverse();
};

autoAdvanceUniverse();

const autoAdvanceGenerations = () => {
    drawUniverse();

    animationId = requestAnimationFrame(autoAdvanceGenerations);
};

const set_play_pause = (play: boolean) => {
    in_play = play;

    if (in_play) {
        playPauseButton.textContent = "Pause";
        autoAdvanceGenerations();
    } else {
        playPauseButton.textContent = "Play";
        cancelAnimationFrame(animationId);
        animationId = null;
    }
};

const toggle_play_pause = () => {
    set_play_pause(!in_play);
};

const playPauseButton = <HTMLButtonElement>document.getElementById("play-pause-button");

playPauseButton.addEventListener("click", event => {
    toggle_play_pause();
});

const advanceGenerationButton = <HTMLButtonElement>document.getElementById("advance-generation-button");

advanceGenerationButton.addEventListener("click", event => {
    set_play_pause(false);

    universe.advance_generation();

    drawUniverse();
});

const setRandomButton = <HTMLButtonElement>document.getElementById("set-random-button");

setRandomButton.addEventListener("click", event => {
    set_play_pause(false);

    universe.set_random(0.5);

    drawUniverse();
});

const clearCellsButton = <HTMLButtonElement>document.getElementById("clear-cells-button");

clearCellsButton.addEventListener("click", event => {
    set_play_pause(false);

    universe.clear_cells();

    drawUniverse();
});

const UniverseCanvas = <HTMLCanvasElement>document.getElementById("universe-canvas");

const UniverseCanvasContext = UniverseCanvas.getContext("2d");

const drawUniverse = () => {
    UniverseCanvas.height = (CELL_SIZE + CELL_MARGIN_SIZE) * universe.height() + CELL_MARGIN_SIZE;
    UniverseCanvas.width = (CELL_SIZE + CELL_MARGIN_SIZE) * universe.width() + CELL_MARGIN_SIZE;

    UniverseCanvasContext.fillStyle = GRID_COLOR;
    UniverseCanvasContext.fillRect(0, 0, UniverseCanvas.height, UniverseCanvas.width);

    for (let row = 0; row < universe.height(); row++) {
        for (let col = 0; col < universe.width(); col++) {
            UniverseCanvasContext.fillStyle = universe.is_alive(row, col)
                ? ALIVE_COLOR
                : DEAD_COLOR;

            UniverseCanvasContext.fillRect(
                (CELL_SIZE + CELL_MARGIN_SIZE) * col + CELL_MARGIN_SIZE,
                (CELL_SIZE + CELL_MARGIN_SIZE) * row + CELL_MARGIN_SIZE,
                CELL_SIZE,
                CELL_SIZE
            );
        }
    }
};

drawUniverse();

UniverseCanvas.addEventListener("click", event => {
    const boundingRect = UniverseCanvas.getBoundingClientRect();

    const scaleX = UniverseCanvas.width / boundingRect.width;
    const scaleY = UniverseCanvas.height / boundingRect.height;

    const canvasLeft = (event.clientX - boundingRect.left) * scaleX;
    const canvasTop = (event.clientY - boundingRect.top) * scaleY;

    const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), universe.height() - 1);
    const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), universe.width() - 1);

    universe.toggle_cell(row, col);

    drawUniverse();
});
