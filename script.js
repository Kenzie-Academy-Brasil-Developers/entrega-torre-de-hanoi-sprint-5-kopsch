let towerPosition = [[5, 4, 3, 2, 1],[],[]]
let clapping = new Audio("src/clapping.wav") 
console.log(towerPosition[0].length)
let diskPosition = ["disk-p1", "disk-p2", "disk-p3", "disk-p4", "disk-p5","disk-p0",
                    "tower-1", "tower-2", "tower-3"]
let firstTower = document.querySelector("#t1")
let secondTower = document.querySelector("#t2")
let thirdTower = document.querySelector("#t3")
let title = document.querySelector(".title")
let box = document.querySelector(".box")
let congratulation = document.querySelector(".congratulation")
let movements = []
function renderize() {
    towerPosition.forEach((tower, towerNum) => {
        tower.forEach((disk, diskNum) => {
            let DiskPos = document.querySelector(`.disk-d${disk}`)
            diskPosition.forEach((position) => {
            DiskPos.classList.remove(position)
            })
            DiskPos.classList.add(`tower-${(towerNum + 1)}`)
            DiskPos.classList.add(`disk-p${(diskNum + 1)}`)
        })
    })
}

function moveDisk (towerOrigin, towerDestiny) {
    let disk = towerPosition[towerOrigin].pop()
    if (towerPosition[towerDestiny].length){
        if(towerPosition[towerDestiny][towerPosition[towerDestiny].length - 1] < disk) {
        window.alert("Movimento inválido")
        return towerPosition[towerOrigin].push(disk)
        }
    }
    let DiskPos = document.querySelector(`.disk-d${disk}`)
    DiskPos.classList.add("disk-p0")
    towerPosition[towerDestiny].push(disk)
    setTimeout(youWin, 1400)
    setTimeout(renderize, 500)
}

firstTower.addEventListener('click', () => inTower(0))
secondTower.addEventListener('click', () => inTower(1))
thirdTower.addEventListener('click', () => inTower(2))

function inTower(n){
    if(movements.length && movements[0].length === 1) {
        movements[0].push(n)
    } else {
        movements.unshift([n])
    }
}

function youWin() {
    if(towerPosition[1].length === 5){
        title.classList.add("hidden")
        box.classList.add("hidden")
        congratulation.classList.remove("hidden")
        clapping.play()
    }
}

setInterval(() => {
    if(movements.length && movements[movements.length - 1].length === 2) {
        let m = movements.pop()
        moveDisk(m[0], m[1])
    }
}, 500)
renderize()