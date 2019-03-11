function bug () {
  for (var i = 0; i < 5; i++) {
    this.i = i
    setTimeout(()=> {
        console.log(i)
    }, 500)
    console.log(this.i)
  }
}

function a () {
  for (var i = 0; i < 5; i++) {
    this.i = i
    setTimeout(function (){
      console.log(this.i)
    }.bind({i}), 500)
    console.log(this.i)
  }
}

function b () {
  for (var i = 0; i < 5; i++) {
    ((i) =>{
      this.i = i
      setTimeout(()=> {
          console.log(i)
      }, 500)
      console.log(this.i)
    })(i)
  }
}

function c () {
  for (let i = 0; i < 5; i++) {
    this.i = i
    setTimeout(()=> {
        console.log(i)
    }, 500)
    console.log(this.i)
  }
}

function d () {
  for (var i = 0; i < 5; i++) {
    this.i = i
    setTimeout(function(j) {
        console.log(j)
    }, 500, i)
    console.log(this.i)
  }
}
bug()