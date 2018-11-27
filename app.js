$.ajax({
  url:'https://api.darksky.net/forecast/361a4fe8c990f50ac449f88ea9177001/-33.4377968,-70.6504451',
  method:'GET'
}).then(funtion(data) {
  console.log(data)
})
