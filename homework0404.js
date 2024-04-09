var images = ["profile_img1.jpg", "profile_img2.jpg", "profile_img3.jpg"];
var index = 0;

function changeImage() {
  var div = document.getElementById("profile");
  div.style.backgroundImage = "url(" + images[index] + ")"; // 배경 이미지 변경

  index = (index + 1) % images.length;
}

document.getElementById("profile").addEventListener("click", changeImage);

window.onload = function () {
  // ♥ 요소를 동적으로 생성하고 시작 위치와 애니메이션 속도를 무작위로 설정
  var heartsDiv = document.getElementById("hearts");
  for (var i = 0; i < 100; i++) {
    // 100개의 ♥ 요소를 생성
    var heart = document.createElement("div");
    heart.className = "falling";
    heart.textContent = "♥";
    heart.style.left = Math.random() * 100 + "%"; // 시작 위치를 무작위로 설정
    heart.style.animationDuration = Math.random() * 5 + "s"; // 애니메이션 속도를 무작위로 설정
    heartsDiv.appendChild(heart);

    // 애니메이션이 완료되면 ♥ 요소를 삭제
    heart.addEventListener("animationend", function () {
      this.remove();
    });
  }
};
