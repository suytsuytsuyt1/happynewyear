
/*_______________   Hiệu ứng open thẻ  _______________-*/
document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName('open')[0].addEventListener('click', function () {
      document.getElementsByClassName('bao_quat')[0].classList.add('is-open')
    })
  });


  /*___________________  hiệu ứng viết chữ và nội dung   _______________-*/
  function speech(){
  var text = "Như thường lệ , mỗi năm mỗi khác , năm nay sẽ là một bất ngờ nhỏ";
  var textArray = text.split("");

  var i = 0;
  var interval = setInterval(function(){
    document.getElementById("text").innerHTML += textArray[i];
    i++;
    if (i >= textArray.length){
      clearInterval(interval);
    }
  }, 80);
}
speech();


 /*___________________  tạo bông tuyết   _______________-*/
var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Set up snowflakes
  var snowflakes = [];
  for (var i = 0; i < 100; i++) {
      snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 4 + 1,
          speed: Math.random() * 3 + 1,
      });
  }
  
  // Draw snowflakes
  function drawSnowflakes() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      for (var i = 0; i < snowflakes.length; i++) {
          var snowflake = snowflakes[i];
          ctx.moveTo(snowflake.x, snowflake.y);
          ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2, true);
      }
      ctx.fill();
      moveSnowflakes();
  }
  
  // Move snowflakes
  function moveSnowflakes() {
      for (var i = 0; i < snowflakes.length; i++) {
          var snowflake = snowflakes[i];
          snowflake.y += snowflake.speed;
          if (snowflake.y > canvas.height) {
              snowflake.y = -snowflake.radius;
              snowflake.x = Math.random() * canvas.width;
          }
      }
  }
  
  // Start animation loop
  setInterval(drawSnowflakes, 30);


 /*___________________  click vào màn hình tự phát audio  _______________-*/
 document.addEventListener('click', function(){
  const Audio = document.getElementById('audio');
  Audio.play();
 });

function lat_anh(){
 let imgContainer = document.querySelector(".img-container");
 setInterval(() => {
 let last = imgContainer.firstElementChild;
 last.remove();
 imgContainer.appendChild(last);
 }, 2500);
}
lat_anh();
    