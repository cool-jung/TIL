function goToSchool() {
  console.log(`학교에 갑니다.`)
}

function arriveAtSchool_tobe() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const status = 2
      if (status === 1) {
        resolve(`학교에 도착했습니다.`)
      } else {
        reject("중간에 넘어져 다쳤습니다.")
      }
    }, 1000)
  })
}

function cure() {
  console.log(`양호실 가서 약 발랐습니다.`)
}

function study() {
  console.log(`공부합니다.`)
}

function solutionPromise() {
  goToSchool()
  arriveAtSchool_tobe()
    .then(function (res) {
      console.log(res)
      return res
    })
    .catch(function (err) {
      console.log("이건 에러야 ㅇㄴㅇㄴㅇㄴ", err)
      cure()
    })
}
    
// solutionPromise()

[1,2,3,4,5]

async function solutionAsync() {
  goToSchool()
  try {
    const answer = await arriveAtSchool_tobe()
    console.log(answer)
    study()
  } catch (error) {
    console.log(error)
    cure()
  }
}

solutionAsync()

/**
async function 함수명() {
  await 비동기_처리_메서드_명();
}
 */