"use strict";
(self["webpackChunkwasm_ts_rust"] = self["webpackChunkwasm_ts_rust"] || []).push([["main"],{

/***/ "../pkg/wasm_ts_rust.js":
/*!******************************!*\
  !*** ../pkg/wasm_ts_rust.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Universe: () => (/* reexport safe */ _wasm_ts_rust_bg_js__WEBPACK_IMPORTED_MODULE_0__.Universe),
/* harmony export */   __wbg_random_1385edd75e02760c: () => (/* reexport safe */ _wasm_ts_rust_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_random_1385edd75e02760c),
/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _wasm_ts_rust_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),
/* harmony export */   __wbindgen_throw: () => (/* reexport safe */ _wasm_ts_rust_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw)
/* harmony export */ });
/* harmony import */ var _wasm_ts_rust_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_ts_rust_bg.wasm */ "../pkg/wasm_ts_rust_bg.wasm");
/* harmony import */ var _wasm_ts_rust_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_ts_rust_bg.js */ "../pkg/wasm_ts_rust_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wasm_ts_rust_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);
_wasm_ts_rust_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


(0,_wasm_ts_rust_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_wasm_ts_rust_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "../pkg/wasm_ts_rust_bg.js":
/*!*********************************!*\
  !*** ../pkg/wasm_ts_rust_bg.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Universe: () => (/* binding */ Universe),
/* harmony export */   __wbg_random_1385edd75e02760c: () => (/* binding */ __wbg_random_1385edd75e02760c),
/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),
/* harmony export */   __wbindgen_throw: () => (/* binding */ __wbindgen_throw)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
let wasm;
function __wbg_set_wasm(val) {
    wasm = val;
}


const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

function notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }

const UniverseFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_universe_free(ptr >>> 0));
/**
*/
class Universe {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Universe.prototype);
        obj.__wbg_ptr = ptr;
        UniverseFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        UniverseFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_universe_free(ptr);
    }
    /**
    * @param {number} height
    * @param {number} width
    * @returns {Universe}
    */
    static new(height, width) {
        const ret = wasm.universe_new(height, width);
        return Universe.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    area() {
        const ret = wasm.universe_area(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} row
    * @param {number} col
    * @returns {number}
    */
    to_idx(row, col) {
        const ret = wasm.universe_to_idx(this.__wbg_ptr, row, col);
        return ret >>> 0;
    }
    /**
    */
    advance_generation() {
        wasm.universe_advance_generation(this.__wbg_ptr);
    }
    /**
    * @returns {string}
    */
    to_string_universe() {
        let deferred1_0;
        let deferred1_1;
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.universe_to_string_universe(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            deferred1_0 = r0;
            deferred1_1 = r1;
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
    * @param {number} alive_prob
    */
    set_random(alive_prob) {
        wasm.universe_set_random(this.__wbg_ptr, alive_prob);
    }
    /**
    * @returns {number}
    */
    count_alive_cells() {
        const ret = wasm.universe_count_alive_cells(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} row
    * @param {number} col
    */
    toggle_cell(row, col) {
        wasm.universe_toggle_cell(this.__wbg_ptr, row, col);
    }
    /**
    * @param {number} row
    * @param {number} col
    * @returns {boolean}
    */
    is_alive(row, col) {
        const ret = wasm.universe_is_alive(this.__wbg_ptr, row, col);
        return ret !== 0;
    }
    /**
    */
    clear_cells() {
        wasm.universe_clear_cells(this.__wbg_ptr);
    }
    /**
    * @param {number} height
    * @param {number} width
    */
    set_size(height, width) {
        wasm.universe_set_size(this.__wbg_ptr, height, width);
    }
    /**
    * @returns {number}
    */
    height() {
        const ret = wasm.universe_height(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    width() {
        const ret = wasm.universe_width(this.__wbg_ptr);
        return ret >>> 0;
    }
}

const __wbg_random_1385edd75e02760c = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');

function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var wasm_ts_rust__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-ts-rust */ "../pkg/wasm_ts_rust.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wasm_ts_rust__WEBPACK_IMPORTED_MODULE_0__]);
wasm_ts_rust__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var CELL_SIZE = 10;
var CELL_MARGIN_SIZE = 1;
var GRID_COLOR = "#CCCCCC";
var DEAD_COLOR = "#FFFFFF";
var ALIVE_COLOR = "#000000";
var universe = wasm_ts_rust__WEBPACK_IMPORTED_MODULE_0__.Universe.new(64, 64);
var in_play = false;
var animationId = null;
var sleep = function (msec) { return new Promise(function (resolve) { return setTimeout(resolve, msec); }); };
var autoAdvanceSpeedRange = document.getElementById("auto-advance-interval-range");
autoAdvanceSpeedRange.value = "50";
var autoAdvanceUniverse = function () { return __awaiter(void 0, void 0, void 0, function () {
    var frequency;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (in_play) {
                    universe.advance_generation();
                }
                frequency = Math.pow(2, Number(autoAdvanceSpeedRange.value) / 10);
                return [4 /*yield*/, sleep(1000.0 / frequency)];
            case 1:
                _a.sent();
                autoAdvanceUniverse();
                return [2 /*return*/];
        }
    });
}); };
autoAdvanceUniverse();
var autoAdvanceGenerations = function () {
    drawUniverse();
    animationId = requestAnimationFrame(autoAdvanceGenerations);
};
var set_play_pause = function (play) {
    in_play = play;
    if (in_play) {
        playPauseButton.textContent = "Pause";
        autoAdvanceGenerations();
    }
    else {
        playPauseButton.textContent = "Play";
        cancelAnimationFrame(animationId);
        animationId = null;
    }
};
var toggle_play_pause = function () {
    set_play_pause(!in_play);
};
var playPauseButton = document.getElementById("play-pause-button");
playPauseButton.addEventListener("click", function (event) {
    toggle_play_pause();
});
var advanceGenerationButton = document.getElementById("advance-generation-button");
advanceGenerationButton.addEventListener("click", function (event) {
    set_play_pause(false);
    universe.advance_generation();
    drawUniverse();
});
var setRandomButton = document.getElementById("set-random-button");
setRandomButton.addEventListener("click", function (event) {
    set_play_pause(false);
    universe.set_random(0.5);
    drawUniverse();
});
var clearCellsButton = document.getElementById("clear-cells-button");
clearCellsButton.addEventListener("click", function (event) {
    set_play_pause(false);
    universe.clear_cells();
    drawUniverse();
});
var UniverseCanvas = document.getElementById("universe-canvas");
var UniverseCanvasContext = UniverseCanvas.getContext("2d");
var drawUniverse = function () {
    UniverseCanvas.height = (CELL_SIZE + CELL_MARGIN_SIZE) * universe.height() + CELL_MARGIN_SIZE;
    UniverseCanvas.width = (CELL_SIZE + CELL_MARGIN_SIZE) * universe.width() + CELL_MARGIN_SIZE;
    UniverseCanvasContext.fillStyle = GRID_COLOR;
    UniverseCanvasContext.fillRect(0, 0, UniverseCanvas.height, UniverseCanvas.width);
    for (var row = 0; row < universe.height(); row++) {
        for (var col = 0; col < universe.width(); col++) {
            UniverseCanvasContext.fillStyle = universe.is_alive(row, col)
                ? ALIVE_COLOR
                : DEAD_COLOR;
            UniverseCanvasContext.fillRect((CELL_SIZE + CELL_MARGIN_SIZE) * col + CELL_MARGIN_SIZE, (CELL_SIZE + CELL_MARGIN_SIZE) * row + CELL_MARGIN_SIZE, CELL_SIZE, CELL_SIZE);
        }
    }
};
drawUniverse();
UniverseCanvas.addEventListener("click", function (event) {
    var boundingRect = UniverseCanvas.getBoundingClientRect();
    var scaleX = UniverseCanvas.width / boundingRect.width;
    var scaleY = UniverseCanvas.height / boundingRect.height;
    var canvasLeft = (event.clientX - boundingRect.left) * scaleX;
    var canvasTop = (event.clientY - boundingRect.top) * scaleY;
    var row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), universe.height() - 1);
    var col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), universe.width() - 1);
    universe.toggle_cell(row, col);
    drawUniverse();
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "../pkg/wasm_ts_rust_bg.wasm":
/*!***********************************!*\
  !*** ../pkg/wasm_ts_rust_bg.wasm ***!
  \***********************************/
/***/ ((module, exports, __webpack_require__) => {

/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./wasm_ts_rust_bg.js */ "../pkg/wasm_ts_rust_bg.js");
module.exports = __webpack_require__.v(exports, module.id, "9b4344306d5f1c8828f0", {
	"./wasm_ts_rust_bg.js": {
		"__wbg_random_1385edd75e02760c": WEBPACK_IMPORTED_MODULE_0.__wbg_random_1385edd75e02760c,
		"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw
	}
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=main.bundle.js.map