$(document).ready(function() {
  for (let i = 0; i < 500; i++) {
    let twinkle = Math.random() * 10 + 0.2;
    $(".space").append(
      `<div class="star"><div class="glow" style="animation: twinkle ${twinkle}s infinite alternate;"></div></div>`
    );
  }

  $(".space .star").each(function() {
    let top = Math.random() * $(window).height() - 20;
    let left = Math.random() * $(window).width() - 20;
    $(this).css("top", `${top}px`);
    $(this).css("left", `${left}px`);
  });
});

$(document).ready(function() {
  const numberOfStars = 500;

  function initializeStars() {
    $(".space").empty();

    for (let i = 0; i < numberOfStars; i++) {
      let twinkle = Math.random() * 10 + 0.2;
      $(".space").append(
        `<div class="star">
          <div class="glow" style="animation: twinkle ${twinkle}s infinite alternate;"></div>
         </div>`
      );
    }

    $(".space .star").each(function() {
      let top = Math.random() * $(window).height() - 20;
      let left = Math.random() * $(window).width() - 20;
      $(this).css({
        top: `${top}px`,
        left: `${left}px`,
      });
    });
  }

  initializeStars();

  $(window).on("resize", function() {
    initializeStars();
  });
});


