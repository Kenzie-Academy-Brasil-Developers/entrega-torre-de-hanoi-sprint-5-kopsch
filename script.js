let towerPosition = [[5, 4, 3, 2, 1],[],[]]
let diskPosition = ["disk-p1", "disk-p2", "disk-p3", "disk-p4", "disk-p5","disk-p0","tower-1", "tower-2", "tower-3"]
let firstTower = document.querySelector("#t1")
let secondTower = document.querySelector("#t2")
let thirdTower = document.querySelector("#t3")
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
    let DiskPos = document.querySelector(`.disk-d${disk}`)
    DiskPos.classList.add("disk-p0")
    towerPosition[towerDestiny].push(disk)
    setTimeout(renderize, 1000)
}

firstTower.addEventListener("click", function() {
    if (movements.length && movements[0].length === 1) {
        movements[0].push(secondTower)
    } else {
        movements.unshift([secondTower])
    }
    console.log(movements)
})

renderize()