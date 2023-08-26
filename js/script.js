
const boxes = document.querySelectorAll('.box')
const h1 = document.querySelector('h1')

let score = 0



function createFood() {
    let rnd = Math.floor(Math.random() * boxes.length)

    boxes[rnd].classList.add('food')
}
createFood()

boxes.forEach((box, idx) => {
    box.id = idx
    if (idx >= 0 && idx < 3) {
        box.classList.add('active')
    }
})





window.onkeydown = (e) => {
    let snake = document.querySelectorAll('.active')

    if (e.keyCode === 37) {
        let last = snake[snake.length - 1]


        boxes[ +last.id - 1 ].classList.add('active')
        snake[0].classList.remove('active')
    }
    if (e.keyCode === 38) {
        let last = snake[snake.length - 1]

        boxes[+last.id - 10].classList.add('active')
        snake[0].classList.remove('active')

    }
    if (e.keyCode === 39) {
        let last = snake[snake.length - 1]

        boxes[+last.id + 1].classList.add('active')
        snake[0].classList.remove('active')
    }
    if (e.keyCode === 40) {
        let last = snake[snake.length - 1]

        boxes[+last.id + 10].classList.add('active')
        snake[0].classList.remove('active')
    }
}