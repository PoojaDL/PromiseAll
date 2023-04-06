const posts=[
  {title:'Post One',body:'This is post one'},
  {title:'Post Two',body:'This is post two'}
];

function updateLastUserActivityTime(){
  return new Promise((resolve,reject)=>{
    let a=true;
    let time= new Date().toString();
    // timestamp = date.getTime();
    console.log(time)
    if(a){
      resolve(()=>{
      });
    }else{
      reject('Error')
    }


  })
}

// function delete(posts){
//
// }

function createPost(post){
  return new Promise((resolve,reject)=>{
    let a=true;

    setTimeout(()=>{
    posts.push(post);
    const time=updateLastUserActivityTime();
    console.log(posts.pop(posts.length-1));
    if(a){
      resolve();
    }
    else{
      reject('Error')
    }
  },1000)
  })
}

Promise.all([createPost({title:'Post 4',body:'This is post 4'}),updateLastUserActivityTime]);
