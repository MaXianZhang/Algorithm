/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    if (grid.length === 0) {
        return 0;
    }

    const x = grid.length;
    const y = grid[0].length;
    const yanMo = (i , j) => {
        if (i < 0 || j < 0 || i >= x || j >= y) {
            return;
        }

        if (grid[i][j] === '0') {
            return;
        }

        grid[i][j] = '0';
        
        yanMo(i + 1, j);
        yanMo(i - 1, j);
        yanMo(i, j + 1);
        yanMo(i, j - 1);
    };

    let res = 0;
    
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (grid[i][j] === '1') {
                res++;
                yanMo(i, j);
            }
        }
    }

    return res;
};