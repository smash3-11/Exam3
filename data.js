const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: ''
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        img: 'macbook13.png',

        price: 1299,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C78CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Air',
        img: 'macbookpro.png',

        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                description: ''
            },
            ram: {
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: 8,
                type: 'tb'
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]
let photos = {
    batareyka: "img/battery.png",
    intel: 'img/intel.png',
    m1: 'img/m1.png',
    memory: 'img/memory.png',
    video: 'img/video.png',
    memory_2: 'img/memory2.png',
    seta: 'img/3v1.jpg',
    palchik: 'img/palchik.png'

}
console.log(photos.m1);
let content = document.querySelector('.content')

for (let i of data) {
    let box = document.createElement('div')
    let block_img_mac = document.createElement('div')
    let block_img_mac_photo = document.createElement('img')
    let block_img_mac_h1 = document.createElement('h1')
    let block_img_mac_p = document.createElement('p')
    let button_flex = document.createElement('div')
    let button_buy = document.createElement('button')
    let hr = document.createElement('hr')
    let footer = document.createElement('div')
    let s = document.createElement('div')
    let more = document.createElement('h5')
    let ht = document.createElement('hr')
    let block_one = document.createElement('div')
    let block_one_h1 = document.createElement('h1')
    let block_one_p = document.createElement('h4')
    let block_two = document.createElement('div')
    let block_two_img = document.createElement('img')
    let blok_two_h1 = document.createElement('h4')
    let block_two_p = document.createElement('p')
    let block_three = document.createElement('div')
    let block_three_img = document.createElement('img')
    let block_three_h1 = document.createElement('h4')
    let block_three_p = document.createElement('p')
    let block_for = document.createElement('div')
    let block_for_h1 = document.createElement('h1')
    let block_for_p = document.createElement('p')
    let block_five = document.createElement('div')
    let block_five_img = document.createElement('img')
    let block_five_p = document.createElement('p')
    let block_six = document.createElement('div')
    let block_six_img = document.createElement('img')
    let block_six_h3 = document.createElement('h4')
    let block_six_p = document.createElement('p')
    let block_seven = document.createElement('div')
    let block_seven_h1 = document.createElement('h1')
    let block_seven_p = document.createElement('p')
    let block_eyt = document.createElement('div')
    let block_eyt_img = document.createElement('img')
    let block_eyt_p = document.createElement('p')



    //class.add

    box.classList.add('box')
    more.classList.add('h5')
    block_img_mac_h1.classList.add('h1')
    block_img_mac_p.classList.add('p')
    hr.classList.add('hr')
    button_buy.classList.add('buy')
    footer.classList.add('footer')
    block_one.classList.add('s')
    block_one_h1.classList.add('h1')
    block_one_p.classList.add('p')
    block_two.classList.add('s')
    block_two_img.classList.add('imga')
    block_two_p.classList.add('p')
    blok_two_h1.classList.add('h4')
    block_three.classList.add('s')
    block_three_p.classList.add('p')
    block_three_h1.classList.add('h4')
    block_for.classList.add('s')
    block_for_h1.classList.add('h1')
    block_for_p.classList.add('p')
    block_five.classList.add('s')
    block_five_p.classList.add('p')
    block_six.classList.add('s')
    block_six_h3.classList.add('h3')
    block_six_p.classList.add('p')
    block_seven.classList.add('s')
    block_seven_h1.classList.add('h1')
    block_seven_p.classList.add('p')
    block_eyt.classList.add('s')
    block_eyt_p.classList.add('p')

    for (let b of i.colors) {
        let button_flex_one = document.createElement('button')

        button_flex_one.classList.add('one')
        button_flex_one.style.backgroundColor = b
        button_flex.append(button_flex_one)
        button_flex_one.setAttribute('data-color', b)



        // button_flex_one.onclick = () => {

        //     if (button_flex_one.getAttribute('data-color') === '#E3CCB4') {
        //         block_img_mac_photo.src = './img/macbookair.png'
        //     }
        //     if (button_flex_one.getAttribute('data-color') === '#B1B2B7') {
        //         block_img_mac_photo.src = './img/macbook13.png'
        //     }
        //     if (button_flex_one.getAttribute('data-color') === '#C7C8CA') {
        //         block_img_mac_photo.src = './img/macbookpro.png'
        //     }

        // }



        //inerHTML
        more.innerHTML = 'Learn more..'
        block_img_mac_h1.innerHTML = i.title
        button_buy.innerHTML = 'Buy'
        // button_buy.href = 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch'
        block_img_mac_p.innerHTML = `From $${i.price}`
        block_one_h1.innerHTML = `${i.specs.display.size}"`
        block_one_p.innerHTML = `${i.specs.display.title}`
        blok_two_h1.innerHTML = `${i.specs.chip.title}`
        block_two_p.innerHTML = `${i.specs.chip.description}`
        block_three_h1.innerHTML = `${i.specs.ram.title}`
        block_three_p.innerHTML = `${i.specs.ram.description}`
        block_for_h1.innerHTML = `${i.specs.memory.size} ` + i.specs.memory.type
        block_for_p.innerHTML = 'Maximum contgurable snorage'
        block_five_p.innerHTML = `Up to ${i.specs.battery} hours battery snorge`
        block_six_h3.innerHTML = i.specs.camera.title
        block_six_p.innerHTML = i.specs.camera.description
        block_seven_h1.innerHTML = i.specs.weight + ' lb.'
        block_seven_p.innerHTML = 'Weight'
        block_eyt_p.innerHTML = i.specs.other





        //img
        block_img_mac_photo.src = `./img/${i.img}`
        block_five_img.src = `img/battery.png`
        if (i.specs.chip.title === 'Apple M1 chip') {
            block_two_img.src = photos.m1
        } else {
            block_two_img.src = photos.intel
        }
        if (i.specs.ram.title === 'Up to 16GB unified memory') {
            block_three_img.src = photos.memory
        } else {
            block_three_img.src = photos.memory_2
        }

        if (i.specs.other[1] === 'Sound') {
            block_eyt_img.src = photos.seta
        } else {
            block_eyt_img.src = photos.palchik
        }
        block_five_img.src = photos.batareyka
        block_six_img.src = photos.video


        //append
        content.append(box)
        box.append(block_img_mac, footer)
        block_img_mac.append(block_img_mac_photo, block_img_mac_h1, block_img_mac_p, button_flex, button_buy, hr)
        button_flex.append(/*button_flex_one,  button_flex_two, button_flex_three */)

        footer.append(block_one, block_two, block_three, block_for, block_five, block_six, block_seven, block_eyt)
        block_one.append(block_one_h1, block_one_p)
        block_two.append(block_two_img, blok_two_h1, block_two_p)
        block_three.append(block_three_img, block_three_h1, block_three_p)
        block_for.append(block_for_h1, block_for_p)
        block_five.append(block_five_img, block_five_p)
        block_six.append(block_six_img, block_six_h3, block_six_p)
        block_seven.append(block_seven_h1, block_seven_p)
        block_eyt.append(block_eyt_img, block_eyt_p, ht,more)



    }
}