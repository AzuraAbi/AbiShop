const sale_next_button = document.getElementById('sale-next')
const sale_prev_button = document.getElementById('sale-prev')
const sale_slides = document.getElementById('sale-slides')

const user_buttons = document.getElementsByClassName('user-btn')

var current_sale_index = 0
const min_sale_index = 0
const max_sale_index = 2
const auto_change_sale = 5000
var debounce = false

function update_sales() {
    const push_slide = sale_slides.querySelector('.first')

    if(push_slide) {
        document.documentElement.style.setProperty('--sale-index', current_sale_index)
    }

    debounce = true

    setTimeout(() => {
        debounce = false
    }, 800)
}

sale_next_button.addEventListener('click', () => {
    if(debounce) return

    if(current_sale_index == max_sale_index) {
        current_sale_index = min_sale_index
    } else {
        current_sale_index += 1
    }

    update_sales()
})

sale_prev_button.addEventListener('click', () => {
    if(debounce) return
    
    if(current_sale_index == min_sale_index) {
        current_sale_index = max_sale_index
    } else {
        current_sale_index -= 1
    }

    update_sales()
})

for(let btn = 0; btn < user_buttons.length; btn++) {
    btn.addEventListener('mouseenter', () => {

    })

    btn.addEventListener('mouseleave', () => {
        
    })
}

setInterval(() => {
    if(debounce == true) return

    if(current_sale_index == max_sale_index) {
        current_sale_index = min_sale_index
    } else {
        current_sale_index += 1
    }

    update_sales()

}, auto_change_sale);