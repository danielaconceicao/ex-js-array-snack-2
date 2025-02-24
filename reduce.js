const numeri = [1, 2, 3, 4];

const doppiMap = numeri.reduce((acc, curr) => [...acc, curr * 2], []);
console.log(doppiMap);

const doppiFilter = numeri.reduce((acc, curr) => {
    if(curr % 2 === 0){
        return [...acc, curr]
    }else{
        return acc;
    }
}, [])

console.log(doppiFilter);

