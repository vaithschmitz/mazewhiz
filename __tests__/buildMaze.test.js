const {MazeWhiz} = require('../MazeWhiz')

describe('Building Maze', () => {
    it('builds width of size[0], height of size[1]', () => {
        const mazeWhiz = new MazeWhiz([3,5], 'ok')
        expect(mazeWhiz.maze.length).toEqual(5)
    });
});

