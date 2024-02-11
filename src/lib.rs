use fixedbitset::FixedBitSet;
use itertools::{iproduct, Itertools};
use wasm_bindgen::prelude::*;

const ALIVE_SYMBOL: char = '#';
const DEAD_SYMBOL: char = '.';

#[wasm_bindgen]
pub struct Universe {
    height: usize,
    width: usize,
    cells: FixedBitSet,
}

impl std::fmt::Display for Universe {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(
            f,
            "{}",
            (0..self.height)
                .map(|row| (0..self.width)
                    .map(|col| if self.cells.contains(self.width * row + col) {
                        ALIVE_SYMBOL
                    } else {
                        DEAD_SYMBOL
                    })
                    .join(""))
                .join("\n")
        )
    }
}

#[wasm_bindgen]
impl Universe {
    pub fn new(height: usize, width: usize) -> Self {
        Self {
            height,
            width,
            cells: FixedBitSet::with_capacity(height * width),
        }
    }

    pub fn area(&self) -> usize {
        self.height * self.width
    }

    pub fn to_idx(&self, row: usize, col: usize) -> usize {
        assert!(row < self.height && col < self.width);

        row * self.width + col
    }

    pub fn advance_generation(&mut self) {
        self.cells = self.create_next_cells();
    }

    pub fn to_string_universe(&self) -> String {
        self.to_string()
    }

    pub fn set_random(&mut self, alive_prob: f64) {
        (0..self.area()).for_each(|cell_idx| {
            self.cells
                .set(cell_idx, js_sys::Math::random() < alive_prob)
        })
    }

    pub fn count_alive_cells(&self) -> usize {
        self.cells.count_ones(..)
    }

    pub fn toggle_cell(&mut self, row: usize, col: usize) {
        self.cells.toggle(self.to_idx(row, col));
    }

    pub fn is_alive(&self, row: usize, col: usize) -> bool {
        self.cells.contains(self.to_idx(row, col))
    }

    pub fn clear_cells(&mut self) {
        self.cells.set_range(.., false);
    }

    pub fn set_size(&mut self, height: usize, width: usize) {
        self.height = height;
        self.width = width;
        self.cells = FixedBitSet::with_capacity(height * width);
    }

    pub fn height(&self) -> usize {
        self.height
    }

    pub fn width(&self) -> usize {
        self.width
    }
}

impl Universe {
    fn count_neighbor_alive_cells(&self, row: usize, col: usize) -> usize {
        iproduct!([self.height - 1, 0, 1], [self.width - 1, 0, 1])
            .filter(|&(diff_row, diff_col)| {
                if diff_row == 0 && diff_col == 0 {
                    return false;
                }

                let nei_row = (row + diff_row) % self.height;
                let nei_col = (col + diff_col) % self.width;
                let nei_cell_idx = self.to_idx(nei_row, nei_col);

                self.cells.contains(nei_cell_idx)
            })
            .count()
    }

    fn create_next_cells(&self) -> FixedBitSet {
        let mut next_cells = FixedBitSet::with_capacity(self.area());
        for (row, col) in iproduct!(0..self.height, 0..self.width) {
            let cell_idx = self.to_idx(row, col);
            let nei_alive_cell_num = self.count_neighbor_alive_cells(row, col);
            let next_alive =
                nei_alive_cell_num == 3 || nei_alive_cell_num == 2 && self.cells[cell_idx];
            next_cells.set(cell_idx, next_alive);
        }

        next_cells
    }
}
