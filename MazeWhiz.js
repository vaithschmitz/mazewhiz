class MazeWhiz {
    constructor(size, algo){
        this.size = size
        this.algo = algo
        this.maze = []
        this.buildMaze()
    }

    buildMaze(){
        for(let i = 0; i < this.size[1]; i++){
            this.maze.push([])
        }
    }

}

let m = new MazeWhiz([3,5], 'ok')

module.exports.MazeWhiz = MazeWhiz