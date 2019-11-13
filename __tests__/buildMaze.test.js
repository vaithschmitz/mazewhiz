const {MazeWhiz} = require('../MazeWhiz')

describe('Building Maze', () => {
    const mazeWhiz = new MazeWhiz([13,15], 'algo')
    it('requires min size of 10x10', () =>{
        expect(() =>{
            new MazeWhiz([7,12], 'algo')}
        ).toThrow('size has to be at least 10x10')
    })
    it('builds maze at correct height', () => {
        expect(mazeWhiz.maze.length).toEqual(15)
    });
    it('builds each line at correct width', () => {
        for(let i = 0; i< mazeWhiz.maze.length; i++){
            expect(mazeWhiz.maze[i].length).toEqual(13)
        }
    })
    it('maze has entrance on line 1', () => {
        expect(mazeWhiz.maze[0]).toContain(1)
    });
});

