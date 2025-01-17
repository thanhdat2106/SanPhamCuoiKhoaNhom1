export function watchMovieHTML(allMovies, nameCondition) {
   let result = "";
   let arr = allMovies.filter((allMovies) => allMovies.name === nameCondition);

   for (let i = 0; i < arr.length; i++) {
      const Item = arr[i];

      result += `
      <div>
               <div class="watch-title">
                  <a href="./Home.html" title="Phim Mới">
                     <i class="fa-solid fa-house"></i>
                     Phim mới
                  </a>
                  <i class="fa-solid fa-angle-right"></i>
                  <span> Xem Phim </span>
                  <i class="fa-solid fa-angle-right"></i>
                  <span>${Item.name}</span>
               </div>

               <div class="watch-video">
                  <iframe
                     width="100%"
                     height="100%"
                     src="${Item.iframe}"
                     title="YouTube video player"
                     frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowfullscreen
                  ></iframe>
               </div>

               <div class="watch-note">
                  <p>Phim Xem tốt nhất trên trình duyệt Safari, FireFox hoặc Chrome. Đừng tiếc 1 comment bên dưới để đánh giá phim hoặc báo lỗi.</p>
               </div>
               <div class="hr">
                  <hr />
               </div>

               <div class="watch-rate">
                  <p>Đánh giá phim</p>

                  <div class="rate-star" style="color: white">
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                  </div>
                  <div class="like-share">
                     <span>Thích</span>
                     <span>Chia sẻ</span>
                  </div>
               </div>
               <hr class="hr1" />
               <div class="watch-name">
                  <p>${Item.name}</p>
                  <span>Xem nội dung chi tiết <a href="${Item.link1}">[Tại Đây]</a></span>
               </div>
            </div>
      `;
   }
   return result;
}
