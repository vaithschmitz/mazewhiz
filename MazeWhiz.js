class MazeWhiz {
    constructor(size, algo){
        this.height = size[1]
        this.width = size[0]
        this.algo = algo
        this.maze = []
        this.buildMaze()
    }

    buildMaze(){
        const inner = () => {
            let innerArr = []
            for(let i = 0; i < this.width; i++){
                innerArr.push('x')
            }
            return innerArr
        }
        for(let i = 0; i < this.height; i++){           
            this.maze.push(inner())
        }

    }

}

module.exports.MazeWhiz = MazeWhiz


