// console.log('person1 : shows ticket');
// console.log('person2 : shows ticket');

// function WifeHavingTicket()  {
//     return new Promise((resolve,reject) =>{
//   setTimeout(()=>{
// resolve('ticket');
//   },3000)
//     })
// }
// console.log('person4 : shows ticket');
// console.log('person5 : shows ticket');

// function popcorn() {
//     return new Promise((resolve,reject)=>{
//         console.log('i have the tickets');
//         console.log('husband: should we go');
//         console.log('wife:i am hungry');
//         console.log('in my popcorn i need butter on it');
//         resolve('popcorn');
//     })
// }

// function enjoyMovie() {
//     return new Promise((resolve,reject)=>{
//         resolve('enjoy a movie');
//     })
// }

// popcorn().then((m)=>{
//     console.log(`we both eat ${m}`);
//     WifeHavingTicket().then((n)=>{
//         console.log(`both : shows ${n}`);
//         enjoyMovie().then((h)=>{
//             console.log(h);
//         })
//     })
// })

// async await

async function check() {
  const c1 =  await new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('a');
    },3000)
   
  })
  console.log(c1);
  const c2 =  await new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve('b');
    },2000)
  })
  console.log(c2);
  const c3 =  await new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('c');
    },1000)
  })
  console.log(c3);

}
check();
