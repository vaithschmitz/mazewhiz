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
            //first array must have entrance
            if(i === 0){ 
                let firstArr = new Array(this.width).fill(0)
                firstArr[1] = 1
                this.maze.push(firstArr)
            } 
            // last array must have exit
            else if(i === this.height -1){
                let lastArr = new Array(this.width).fill(0)
                lastArr[Math.floor(Math.random() * this.width)] = 1
                this.maze.push(lastArr)
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


