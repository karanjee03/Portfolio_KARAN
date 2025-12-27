$(document).ready(function () {
  // Stellar nav
  $('.stellarnav').stellarNav({
    breakpoint: 991,
    position: 'right'
  });

  $(document).mousemove(function (e) {
    $('.cursor').css({
      left: e.clientX + 'px',
      top: e.clientY + 'px'
    });
  });

  // scrolling
  $(".head .stellarnav li a").on("click", function(event){
    event.preventDefault();
    let id = $(this).attr("id");
     $('html, body').animate({
    scrollTop: $(`${id}`).offset().top - 80,
  }, 800); 
  });

  // download
  $("#downloadBtn").click(function() {
  const cvSrc = $("#cvFrame").attr("src");
  console.log(cvSrc);
  
  const link = document.createElement("a");
  link.href = cvSrc;
  link.download = "KARAV_CV.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


// Text Writiing 
  let texts = ["Frontend Developer", "Responsive Web Designer", "UI/UX Enthusiast"];
  let count = 0;
  let backc = 0;
  let index = 0;

  function type() {
    let world = texts[index];
    if (count < world.length) {
      let tx = $(".text-effect .text").text();
      if (world[count] === " ")
        $(".text-effect .text").append(`<span class="typing-text">&nbsp;</span>`);
      else
        $(".text-effect .text").append(`<span class="typing-text">${world[count]}</span>`);

      $(".text-effect .text span:not(:last-child)").removeClass("typing-text");
      tx = tx + world[count];
      backc = count++;
      if (count === world.length) {
        stop();
        setTimeout(() => {
          $(".text-effect .text span").removeClass("typing-text");
        }, 220);
        setTimeout(start, 3000);
        $(".cursor1").addClass("cursor-blink");
      }

    } else {

      let tx = $(".text-effect .text").text();
      $(".text-effect .text").text(tx.slice(0, -1));
      backc--;
      if (backc < 0) {
        index++;
        count = 0;
        if (index == texts.length) {
          index = 0;
        }
      }
    }
  }

  let inter;
  function start() {
    inter = setInterval(type, 220);
    $(".cursor1").removeClass("cursor-blink");

  }
  start();

  function stop() {
    clearInterval(inter);
  }


});
