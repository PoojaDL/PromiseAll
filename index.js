const posts=[
  {title:'Post One',body:'This is post one'},
  {title:'Post Two',body:'This is post two'}
];

function updateLastUserActivityTime(){
  return new Promise((resolve,reject)=>{
    let a=true;
    let time= new Date().toString();
    // timestamp = date.getTime();

    console.log("Before creating "+`${posts[posts.length-1].title}`+" time was "+time)
    if(a){
      resolve("User last activity time:"+time);
    }else{
      reject('Error')
    }


  })
}

// function delete(posts){
//
// }

function createPost(post){
  setTimeout(()=>{
    return new Promise((resolve,reject)=>{
      let a=true;
      posts.push(post);
      console.log("After creating "+`${posts[posts.length-1].title}`+">>>>" )
      console.log(posts)
      console.log("User last activity time :"+new Date().toString())

      if(a){
        resolve();
      }
      else{
        reject('Error')
      }

    })
  },1000)
const time=updateLastUserActivityTime();
}


Promise.all([createPost({title:'Post Three',body:'This is post Three'})]);
