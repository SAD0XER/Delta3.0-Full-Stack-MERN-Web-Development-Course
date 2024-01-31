// #1 Callback in JS
/* function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three(); */

//Callback Hell => also called Callback Hell
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolove, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if (num > 3) {
        reject("Promise Rejected.");
      }

      h1.style.color = color;
      resolove("Color Changed!");
      reject("Color NOT Changed!");
    }, delay);
  });
}

/* 1st approach: changeColor("red", 1000, () => {
  changeColor("blue", 1000, () => {
    changeColor("grey", 1000, () => {
      changeColor("yellow", 1000, () => {
        changeColor("orange", 1000);
      });
    });
  });
}); */

//2nd approach: using Promise methods.
/* changeColor("red", 1000)
  .then(() => {
    console.log("Color changed to RED.");
    return changeColor("red", 1000);
  })
  .then(() => {
    console.log("Color changed to BLUE.");
    return changeColor("blue", 1000);
  })
  .then(() => {
    console.log("Color changed to GREY.");
    return changeColor("grey", 1000);
  })
  .then(() => {
    console.log("Color changed to YELLOW.");
    return changeColor("yellow", 1000);
  })
  .then(() => {
    console.log("Color changed to ORANGE.");
    return changeColor("orange", 1000);
  })
  .catch((error) => {
    console.log("Error:", error);
  }); */

//3rd approach: Handling Rejection with Await keyword by adding 'try' & 'catch(e)' block. (BEST)
//Resolving issue with await keyword.
/* async function runner() {
  await changeColor("red", 1000);
  await changeColor("blue", 1000);
  await changeColor("grey", 1000);
  await changeColor("yellow", 1000);
  changeColor("orange", 1000);
} */

/* async function runner() {
  try {
    await changeColor("red", 1000);
    await changeColor("blue", 1000);
    await changeColor("grey", 1000);
    await changeColor("yellow", 1000);
    await changeColor("orange", 1000);
  } catch (error) {
    console.log("Error Caught:", error);
  }
  console.log("Your Remaining Tasks.");
} */

/* -------------------------------------- */

//Promises
/* function saveToDb(data) {
  return new Promise((resolove, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolove("Success: Data is saved!");
    } else {
      reject("Failure: Data is NOT saved because of weak connection.");
    }
  });
} */

// then() and catch() methods: It used to do work after promise is RESOLVED or FAILED.
// old approach
/* let request = saveToDb("ApnaCollege");
request
  .then(() => {
    console.log("Promise is resolved.");
  })
  .catch(() => {
    console.log("Promise is rejected.");
  }); */

// new Improved approach
/* saveToDb("ApnaCollege")
  .then(() => {
    console.log("Promise is resolved.");
  })
  .catch(() => {
    console.log("Promise is rejected.");
  }); */

//Promise Chaining: For depended works. It is completely alternative of Callback Hell code.
/* saveToDb("ApnaCollege")
  .then((result) => {
    console.log("Data 1 is Saved.");
    console.log("Result of Promise-", result);
    return saveToDb("SARVESH");
  })
  .then((result) => {
    console.log("Data 2 is Saved.");
    console.log("Result of Promise-", result);
    return saveToDb("DEVRUKHAKAR");
  })
  .then((result) => {
    console.log("Data 3 is Saved.");
    console.log("Result of Promise-", result);
  })
  .catch((error) => {
    console.log("Promise is rejected.");
    console.log("Error of Promise-", error);
  }); */

//Async Function: Async Keyword
/* async function hi() {
  throw "This is Error!"; //Throw Keyword: Used to throw error.
  return "hi";
} */

/* hi().then((result) => {
  console.log("Promise resolved man!");
console.log("the resulg is", result);
})
.catch((error) => {
console.log("Promise failed with error", error);
}); */

//Async arrow function
/* let hello = async (result) => {
  console.log("Result:", result);
  return "hello";
}; */

function num() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let n = Math.floor(Math.random() * 10) + 1;
      console.log(n);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await num();
  await num();
  await num();
  await num();
  num();
}
