function ajax({url, method = 'GET', data}) {
  const xhr = new XMLHttpRequest()
  
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = () => {
      if(xhr.readyState == 4) {
        if(xhr.status >= 200 && xhr.status <= 300 || xhr.status == 304) {
          resolve && resolve(xhr.responseText)
        } else {
          reject && reject()
        }
      }

      xhr.open(method, url)

      if(method == 'GET') xhr.send()
      else {
        xhr.send(data)
      }
    }
  })
}


