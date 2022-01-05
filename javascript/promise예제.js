// 예제1
new Promise(function(resolve,reject){
  setTimeout(()=>{
    resolve(1);
  },2000);
})
.then(function(result){
  console.log(result); //1
  return result + 10;
})
.then(function(result){
  console.log(result);
  return result + 20; //11
})
.then(function(result){
  console.log(result); //31
})

function getData(){
  return new Promise(function(){
    resolve('hi');
  });
}
getData().then(function(result){
  console.log(result);
  throw new Error('에러에러');
}).catch((err)=>{
  console.log('error',err);
})

// 예제2
function goToSchool(){
  console.log(`학교에 갑니다.`);
}

function arriveAtSchool_tobe(){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      const status = Math.floor(Math.random()*2);
      if(status === 1){
        resolve(`학교에 도착했습니다.`)
      }else{
        reject(`가다 넘어져 다쳤습니다.`)
      }
    },1000);
  });
}

function cure(){
  console.log(`양호실 가서 약 발랐습니다.`)
}

function study(){
  console.log(`공부합니다.`);
}

goToSchool();
arriveAtSchool_tobe().then(function(res){
  console.log(res);
  study();
})
.catch(function(err){
  console.log(err);
  cure();
});

// reject(new Error("중간에 넘어져 다쳤습니다."));