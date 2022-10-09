// async method of function
//promise all 
function  value1(){
	return new Promise(function (resolve , reject){
      console.log("this is resolved");
		 reject();
	})
}
function  value2(){
	return new Promise(function (resolve , reject){
    console.log("this is resolved");
			resolve();
	})
}
function  value3(){
	return new Promise(function (resolve , reject){
    console.log("this is resolved");
			resolve();
	})
}
Promise.all([value1(), value2(), value3()])
  .then(function(){
    console.log("this is success");
  })
  .catch(function(){
    console.log("this is error");
  })
//async direct method

  async function parent(){
	await value1();
	await value2();
	await value3();
	console.log("its a done");

  }
  parent()

// async error method 

async function parent(){
	try{
		await value1();
		console.log("done point")
	}
	catch{
		console.log("error point")
	}
}