/**
 * Create a script which generates 10 arrays with random integer values from 1 to 10 and
 output them. Special condition is - if the random value is 5 it sticks to the same position in all
 next arrays. Save all positions of sticky numbers and output them in sorted order.
 *
 */


let  stickyArrays = () =>  {
    const arrOfArrs = [];
    const sticky = [];
    for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            if (i === 0) arrOfArrs[j] = [];
            if (sticky.includes(i)) {
                arrOfArrs[j][i] = 5;
            } else {
                let x = Math.floor(Math.random() * 10) + 1;
                if (x === 5) {
                    sticky.push(i);
                }
                arrOfArrs[j][i] = x;
            }
        }
    }
    console.log(arrOfArrs.entries('5'))
    sticky.sort(( a , b ) =>  a - b );
    arrOfArrs.push(sticky);
    return arrOfArrs;

}

// console.log(stickyArrays())

module.exports = stickyArrays;
