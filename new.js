async function hello() {
    let puneWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let a = '27 degree cel';
        resolve(a); 
        },1000)
        })
        
        let mumbaiWeather =  new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let b = '42 degree cel'
                resolve(b);
            },2000)
        })

        let p1 = await puneWeather;
        let p2 = await mumbaiWeather;
        return [p1,p2];
        
}

let check = hello();
console.log(check);
