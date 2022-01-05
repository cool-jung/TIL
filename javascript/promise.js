function foo(number, cb) { //넘버와 콜백함수
  setTimeOut(function () { //setTimeOut 2초뒤에 넘버실행
    return cb(number) //넘버 받아서 출력
  }, 2000)
}

function add10(cb) { //10
  return function (number) {
    setTimeOut(function () {
      cb(number + 10) //2초뒤에 넘버 + 10 
    }, 2000)
  }
// }

// function add20(number) {
//   console.log(number + 20)
// }

$.ajax(요청1, {
  success: (data1) => {
    $.ajax(요청2', {
      success: (data2) => {
        $.ajax('요청3', {
          succcess: (data3) => {
            console.log(data1 + data2 + data3)
          }
        })
      }
    })
  }
})

// // 약속된 값

const apiResult = ({ id }) => {
  const users = [
    { id: 1, name: "asas" },
    { id: 2, name: "erer" },
  ]
  return new Promise((resolve, reject) => {
    const user = users.find(({ id: _id }) => _id === id)
    if (user) {
      setTimeout(() => {
        resolve(user)
      }, 2000)
    } else {
      setTimeout(() => {
        reject("값없어")
      }, 2000)
    }
  })
}

apiResult({ id: 3 })
.then((value) => {
  return apiResult({ id: 3 })
}).then(value => {
  return value + apiResult({ id: 3 })
  console.log('err', error)
}).then(value => {
  return value + apiResult({ id: 3 })
  console.log('err', error)
})

async 

try {

  const a = await apiResult({ id: 1 });
  const b = a + await apiResult({ id: 1 });
  const c = b + await  apiResult({ id: 1 });
  a // { id: 1, name: "asas" }
} catch(err) {
  console.log('err', error)
}


await 

foo(10, minus5);
console.log(a + foo(10))
11

function getData(cb){
  return new Promise(function(){
    $.get('url주소/product/1',function(response){
      if(response){
        resolve(response);
      }reject(new Error("Request is failed"));
    });
  });
}

getData().then(function(data){
  console.log(data);
}).catch(function(err){
  console.error(err);
});