class MazeWhiz {
    constructor(size, algo){
        if(size[0] < 10 || size[1] < 10){
            throw('size has to be at least 10x10')
        }
        else{
            this.width = size[0]
            this.height = size[1]
            this.algo = algo
            this.maze = []
            this.buildMaze()
        }
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
            if(i === 0){ // always start first width array with entrance at idx 1
                let innerArr = []
                for(let i = 0; i < this.width; i++){
                    i === 1 ? innerArr.push(1) : innerArr.push(0)
                }
                this.maze.push(innerArr)
            } 
            else{          
            this.maze.push(inner())
            }
        }

    }

}

const mazeWhiz = new MazeWhiz([13,35], 'algo')
console.log(mazeWhiz)
module.exports.MazeWhiz = MazeWhiz


