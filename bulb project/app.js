const onButton = document.getElementById('onBtn');
const offButton = document.getElementById('offBtn');
const bulbs = document.querySelectorAll('.bulb');
const startPatternButton = document.querySelector('.startpattern');
const patternDiv = document.querySelector('.pattern');

let patternCounter = 1; 


onButton.addEventListener('click', function() {
    onButton.style.backgroundColor = 'green';
    offButton.style.backgroundColor = 'red'; 
    bulbs.forEach(bulb => {
        bulb.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcME_A-39rzt0NgbCHPrjenjoaL6omQD7maA&usqp=CAU';
    });
});


offButton.addEventListener('click', function() {
    offButton.style.backgroundColor = 'green'; 
    onButton.style.backgroundColor = 'red'; 
    bulbs.forEach(bulb => {
        bulb.src = 'https://www.vhv.rs/dpng/d/459-4593815_pic-bulboff-on-off-gif-hd-png-download.png';
    });
});


startPatternButton.addEventListener('click', function() {
    patternDiv.textContent = `Pattern ${patternCounter}`;

    if (patternCounter === 1) {
        bulbs.forEach((bulb, index) => {
            if (index < 5) {
                bulb.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcME_A-39rzt0NgbCHPrjenjoaL6omQD7maA&usqp=CAU';
            } else {
                bulb.src = 'https://www.vhv.rs/dpng/d/459-4593815_pic-bulboff-on-off-gif-hd-png-download.png';
            }
        });
    }

    if (patternCounter === 2) {
        bulbs.forEach((bulb, index) => {
            if (index % 2 === 0) {
                bulb.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcME_A-39rzt0NgbCHPrjenjoaL6omQD7maA&usqp=CAU';
            } else {
                bulb.src = 'https://www.vhv.rs/dpng/d/459-4593815_pic-bulboff-on-off-gif-hd-png-download.png';
            }
        });
    }

    if (patternCounter === 3) {
        bulbs.forEach((bulb, index) => {
            if (index % 2 !== 0) {
                bulb.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcME_A-39rzt0NgbCHPrjenjoaL6omQD7maA&usqp=CAU';
            } else {
                bulb.src = 'https://www.vhv.rs/dpng/d/459-4593815_pic-bulboff-on-off-gif-hd-png-download.png';
            }
        });
    }

    if (patternCounter === 4) {
        bulbs.forEach((bulb, index) => {
            if (index > 4) {
                bulb.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcME_A-39rzt0NgbCHPrjenjoaL6omQD7maA&usqp=CAU';
            } else {
                bulb.src = 'https://www.vhv.rs/dpng/d/459-4593815_pic-bulboff-on-off-gif-hd-png-download.png';
            }
        });
    }

    if (patternCounter === 5) {
        bulbs.forEach((bulb, index) => {
            if (Math.floor(index / 2) % 2 === 0) {
                bulb.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcME_A-39rzt0NgbCHPrjenjoaL6omQD7maA&usqp=CAU';
            } else {
                bulb.src = 'https://www.vhv.rs/dpng/d/459-4593815_pic-bulboff-on-off-gif-hd-png-download.png';
            }
        });
    }

    patternCounter++;

    if (patternCounter > 5) {
        patternCounter = 1;
    }
});



