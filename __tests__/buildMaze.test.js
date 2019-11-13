const {MazeWhiz} = require('../MazeWhiz')

describe('Building Maze', () => {
    const mazeWhiz = new MazeWhiz([3,5], 'algo')
    it('builds maze at correct height', () => {
        expect(mazeWhiz.maze.length).toEqual(5)
    });
    it('builds each line at correct width', () => {
        for(let i = 0; i< mazeWhiz.maze.length; i++){
            expect(mazeWhiz.maze[i].length).toEqual(3)
        }
    })
});

