const keys = document.getElementsByClassName('key__button');
// // 'keydown'

// console.log(keys[0]);

// keys[0].addEventListener('keydown', function(){
//     console.log('keydown');
// })


// 1.
document.addEventListener('keydown', function(event){
    event.preventDefault();
    // 1. 
    // const arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
    // let selectedKey = keys[arrowKeys.indexOf(event.key)];
    
    // 2. 
    // switch(event.key){
    //     case 'ArrowUp':
    //         selectedKey = keys[2];
    //         break;
    //     case 'ArrowDown':
    //         selectedKey = keys[3];
    //         break;
    //     case 'ArrowLeft':
    //         selectedKey = keys[0];
    //         break;
    //     case 'ArrowRight':
    //         selectedKey = keys[1];
    //         break;
    // }

    // 3. 
    let selectedKey = document.querySelector(`#${event.key}`);

    
    //console.log(selectedKey);
    //selectedKey.classList.add('pressed');
    selectedKey.innerHTML = 'S';
});


// 2. 
// document.addEventListener('keydown', () => {
//     logMessage();
// });

// 3.
// document.addEventListener('keydown', logMessage);


function logMessage(){
    const message = 'keydown';
    console.log(message);
}