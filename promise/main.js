// 비동기 처리

// 1. callback
// function a(callback) {
//   setTimeout(() => {
//     console.log('A');
//     callback()
//   },1000)
// }
// /* function b() {
//   console.log('B');
// }
// a(function(event) {
//   b()
// }) */
// function b(callback) {
//   setTimeout(() => {
//     console.log('B');
//     callback()
//   },1000)
// }
// function c(callback) {
//   setTimeout(() => {
//     console.log('C');
//     callback()
//   },1000)
// }
// function d(callback) {
//   setTimeout(() => {
//     console.log('D');
//     callback()
//   },1000)
// }
// // 콜백지옥
// a(function() {
//   b(function() {
//     c(function() {
//       d(function() {
//         console.log('Done!')
//       })
//     })
//   })
// })


// 2. Promise 객체와 async await
// function a() {
//   // promise : 약속의 객체!, return을 사용해야 함
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       console.log('A');
//       resolve('Hello A') // resolve를 통해 기다림이 종료된다.
//     }, 1000)
//   })
// }
// /* function b() {
//   console.log('B')
// }
// async function test() {
//   // await a()
//   const res = await a()
//   console.log('res:', res)
//   b()
// }
// test() */
// function b() {
//   // promise : 약속의 객체!
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       console.log('B');
//       resolve('Hello B') 
//     }, 1000)
//   })
// }
// function c() {
//   // promise : 약속의 객체!
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       console.log('C');
//       resolve('Hello C') 
//     }, 1000)
//   })
// }
// function d() {
//   // promise : 약속의 객체!
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       console.log('D');
//       resolve('Hello D') 
//     }, 1000)
//   })
// }

// async function test() {
//   const h1 = await a()
//   const h2 = await b()
//   const h3 = await c()
//   const h4 = await d()
//   console.log(h1, h2, h3, h4)
// }
// test()


// 3. Promise 예외 처리 then
// function a() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('A')
//       resolve()
//     }, 1000)
//   })
// }
// function b() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('B')
//       resolve()
//     }, 1000)
//   })
// }
// function c() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('C')
//       resolve()
//     }, 1000)
//   })
// }
// function d() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('D')
//       resolve()
//     }, 1000)
//   })
// }
// function test() {
//   // then 지옥
//   /* a().then(() => {
//     b().then(() => {
//       c().then(() => {
//         d().then(() => {
//           console.log('Done!')
//         })
//       })
//     })
//   }) */

//   /* a().then(() => {
//     return b()
//   }).then(() => {
//     return c()
//   }).then(() => {
//     return d()
//   }).then(() => {
//     console.log('Done!')
//   }) */
//   // 바로 위 내용과 같음, 체이닝 형식, return이 되야 함
//   a()
//     .then(() => b())
//     .then(() => c())
//     .then(() => d())
//     .then(() => console.log('Done!'))
// }
// test()


// 4. Promise 예외 처리 catch
function a(number) {
  return new Promise((resolve, reject) => {
    if (number > 4) {
      reject()
      return
    }
    setTimeout(() => {
      console.log('A')
      resolve()
    }, 1000)
  })
}
// then catch finally 사용
/* function test() {
  a(2)
    .then(() => {
      console.log('Resolve!')
    })
    .catch(() => {
      console.log('Reject!')
    })
    .finally(() => {
      console.log('Done!')
    })
} */
// async await 사용
async function test() {
  // a(2)
  //   .then(() => {
  //     console.log('Resolve!')
  //   })
  //   .catch(() => {
  //     console.log('Reject!')
  //   })
  //   .finally(() => {
  //     console.log('Done!')
  //   })
  try {
    await a(7)
    console.log('Resolve!')
  } catch(error) {
    console.log('Reject!')
  } finally {
    console.log('Done!')
  }
}
test()