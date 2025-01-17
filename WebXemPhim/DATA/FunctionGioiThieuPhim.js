export function movieIntroHTML(allMovies, nameCondition) {
   let result = "";
   let arr = allMovies.filter((allMovies) => allMovies.name === nameCondition);
   for (let i = 0; i < arr.length; i++) {
      const Item = arr[i];

      result += `
        <div>
               <div class="intro-title">
                  <a href="./Home.html" title="Xem Phim">
                     <i class="fa-solid fa-house"></i>
                     Phim mới
                  </a>
                  <i class="fa-solid fa-angle-right"></i>
                  <span>
                     Giới Thiệu Phim
                     <i class="fa-solid fa-angle-right"></i>
                  </span>
                  <span class="intro-name">${Item.name}</span>
               </div>

               <div class="intro-info">
                  <a href="${Item.link2}" class="icon-play"><i class="fa-solid fa-circle-play"></i></a>
                  <img src="${Item.image}" alt="" class="info-img-1"/>
                  <img src="${Item.image}" alt="" class="info-img-2"/>
                  <div class="info-place">
                     <p class="place-name">${Item.name}</p>
                     <p class="place-e-name">${Item.eName}</p>
                     <div class="place-watch">
                        <a href="##" id="watch-trailer">
                           <i class="fa-brands fa-youtube"></i>
                           Trailer
                        </a>

                        <a href="${Item.link2}">
                           <i class="fa-regular fa-circle-play"></i>
                           Xem Phim
                        </a>
                     </div>
                  </div>
               </div>

               <div class="intro-content">
                  <div class="intro-rate">
                     <div class="like-share">
                        <span>Thich</span>
                        <span>Chia se</span>
                     </div>
                     <div class="rate-star" style="color: white">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                     </div>

                     <ul class="content-info">
                        <li>
                           <label>Đang Phát: </label>
                           <span>${Item.nowPlaying}</span>
                        </li>
                        <li>
                           <label>Năm Phát Hành: </label>
                           <span>${Item.year}</span>
                        </li>
                        <li>
                           <label>Quốc Gia: </label>
                           <span>${Item.country}</span>
                        </li>
                        <li>
                           <label>Thể Loại: </label>
                           <span>${Item.category}</span>
                        </li>
                        <li>
                           <label>Đạo Diễn: </label>
                           <span>${Item.director}</span>
                        </li>
                        <li>
                           <label>Thời Lượng: </label>
                           <span>${Item.time}</span>
                        </li>
                        <li>
                           <label>Diễn Viên: </label>
                           <span>${Item.actor}</span>
                        </li>
                     </ul>
                     <div id="trailer">
                        <hr class="content-hr" />
                        <div class="trailer-video">
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
                     </div>
                     <hr class="content-hr" />
                     <div class="content-review">
                        <p>Nội dung phim và review:</p>
                        <span>${Item.review}</span>
                     </div>
                  </div>
               </div>
            </div>
        `;
   }
   return result;
}
