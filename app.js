// JS Codes

// Kerakli html tag lariga ulanish
const first_player_img = document.querySelector(".first_player");
const second_player_img = document.querySelector(".second_player");
const result_text = document.querySelector(".result");
const btn = document.querySelector(".btn");

// Fireworks kutubxonasini ulash
const container = document.querySelector(".fireworks");
const fireworks = new Fireworks.default(container, {sound: {enabled: true}});

// button ga event qo'shish
// random - tasodifiy
btn.addEventListener("click", () => {
  // tasodifiy sonlarni generatsiya qilish
  const first_random_number = Math.round(Math.random() * 2); // 0, 1, 2
  const second_random_number = Math.round(Math.random() * 2); // 0, 1 ,2

  // birinchi o'yinchi uchun tasodifiy rasm chiqarish
  if (first_random_number == 0) {
    first_player_img.setAttribute("src", "./img/rock.png");
  } else if (first_random_number == 1) {
    first_player_img.setAttribute("src", "./img/scissors.png");
  } else {
    first_player_img.setAttribute("src", "./img/paper.png");
  }

  // ikkinchi o'yinchi uchun tasodifiy rasm chiqarish
  if (second_random_number == 0) {
    second_player_img.setAttribute("src", "./img/rock.png");
  } else if (second_random_number == 1) {
    second_player_img.setAttribute("src", "./img/scissors.png");
  } else {
    second_player_img.setAttribute("src", "./img/paper.png");
  }

  // O'yin natijasini e'lon qilish
  // 0 - tosh
  // 1 - qaychi
  // 2 - qog'oz

  if (first_random_number == 0 && second_random_number == 1) {
    result_text.textContent = "Birinchi o`yinchi yutdi";
    fireworks.start();
  } else if (first_random_number == 1 && second_random_number == 2) {
    result_text.textContent = "Birinchi o`yinchi yutdi";
    fireworks.start();
  } else if (first_random_number == 2 && second_random_number == 0) {
    result_text.textContent = "Birinchi o`yinchi yutdi";
    fireworks.start();
  } else if (first_random_number == second_random_number) {
    result_text.textContent = "Durang!";
  } else {
    result_text.textContent = "Ikkinchi o`yinchi yutdi";
  }
});
