<script setup></script>

<template>
  <div class="bg-[#B7FBFE] pb-200 custom-background">
    <header class="flex items-center justify-around">
      <div class="mt-6 flex-shrink-0 w-49">
        <img class="pointer-events-none h-40 object-contain" src="/logo.png" alt="Logo" />
      </div>
      <div class="mb-10 border-t-2 border-blue-300">
        <div class="flex space-x-20 mx-5">
          <ul>
            <li class="text-[1.8rem] cursor-pointer hover:text-red-500 mt-2">История</li>
          </ul>
          <ul>
            <li class="text-[1.8rem] cursor-pointer hover:text-blue-500 mt-2">Университет</li>
          </ul>
          <ul>
            <li class="text-[1.8rem] cursor-pointer hover:text-green-500 mt-2">Викторины</li>
          </ul>
        </div>
      </div>
      <div class="flex items-center space-x-2 w-49 mb-25 mt-8">
        <img class="pointer-events-none h-15" src="/avatar.png" alt="Avatar" />
        <img class="pointer-events-none h-15" src="/avatar.png" alt="Avatar" />
        <img class="pointer-events-none h-15" src="/avatar.png" alt="Avatar" />
      </div>
    </header>
    <div class="box-border relative mx-auto px-18 pt-5 mt-10 w-[770px] h-[359px] bg-[#ffffff80] rounded-[50px]">
      <h1 class="text-[#333333] font-medium text-[68px] leading-[127%]">Виртуальный <br />тур <br />по истории ЛЭТИ</h1>
      <p class="text-[#333333] font-light text-[48px]">Узнай новое!</p>
    </div>
    <div class="flex justify-center items-center h-screen">
      <div class="flex-shrink-0">
        <img class="h-10 object-contain mt-15" src="/arrow.png" alt="Logo" />
      </div>
    </div>
  </div>
  <production-slider>
    <h2 class="type--h2">Что нового</h2>

    <div class="flex">
      <div class="flex" style="transform: translate3d(0px, 0px, 0px)">
        <div class="flex">
          <production-tile>
            <a href="https://www.victorianopera.com.au/production/mansfield-park/">
              <div class="transform scale(1.03) flex-none block">
                <img
                  class="image"
                  src="https://www.victorianopera.com.au/wp-content/uploads/2025/01/Mansfield-Park-Her-Majestys-990x990.jpg"
                  alt=""
                />
              </div>
              <div class="spring-wrapper" style="transform: translateY(0px)">
                <h4 class="type--h5-caps">Jonathon Dove, Alasdair Middleton</h4>
                <h3 class="type--h1">Mansfield Park</h3>
                <div class="text type--body-16">4–5 April 2025<br />Her Majesty's Theatre, Ballarat</div>
              </div>
            </a>
          </production-tile>
        </div>
        <div class="item-wrapper embla__slide load loaded">
          <production-tile>
            <a href="https://www.victorianopera.com.au/production/the-lyrebirds-voice-2/">
              <div class="media has-image">
                <img
                  class="image"
                  src="https://www.victorianopera.com.au/wp-content/uploads/2024/09/VO_The-Lyrebird_s-Voice_1080x1080-990x990.jpg"
                  alt=""
                />
              </div>
              <div class="spring-wrapper" style="transform: translateY(0px)">
                <h4 class="type--h5-caps">Jayde Kirchert, Peter Rutherford</h4>
                <h3 class="type--h1">The Lyrebird’s Voice</h3>
                <div class="text type--body-16">8–23 May 2025<br />The Round (Nunawading), Darebin Arts Centre, Frankston Arts Centre</div>
              </div>
            </a>
          </production-tile>
        </div>
        <div class="item-wrapper embla__slide load loaded">
          <production-tile>
            <a href="https://www.victorianopera.com.au/production/abduction/">
              <div class="media has-image">
                <img
                  class="image"
                  src="https://www.victorianopera.com.au/wp-content/uploads/2024/09/Victorian-Opera-2025-Season-Artwork-CMS-4500x45004-1.jpg"
                  alt=""
                />
              </div>
              <div class="spring-wrapper" style="transform: translateY(0px)">
                <h4 class="type--h5-caps">Wolfgang Amadeus Mozart, Gottlieb Stephanie</h4>
                <h3 class="type--h1">Abduction</h3>
                <div class="text type--body-16">12–16 August 2025<br />Palais Theatre, St Kilda</div>
              </div>
            </a>
          </production-tile>
        </div>
        <div class="item-wrapper embla__slide load loaded">
          <production-tile>
            <a href="https://www.victorianopera.com.au/production/katya-kabanova/">
              <div class="media has-image">
                <img
                  class="image"
                  src="https://www.victorianopera.com.au/wp-content/uploads/2024/09/Victorian-Opera-2025-Season-Artwork-CMS-4500x45005-Large-990x990.jpeg"
                  alt=""
                />
              </div>
              <div class="spring-wrapper">
                <h4 class="type--h5-caps">Leoš Janáček</h4>
                <h3 class="type--h1">Katya Kabanova</h3>
                <div class="text type--body-16">14–16 October 2025<br />Palais Theatre, St Kilda</div>
              </div>
            </a>
          </production-tile>
        </div>
        <div class="item-wrapper embla__slide load loaded">
          <production-tile>
            <a href="https://www.victorianopera.com.au/production/boojum/">
              <div class="media has-image">
                <img
                  class="image"
                  src="https://www.victorianopera.com.au/wp-content/uploads/2024/09/Victorian-Opera-2025-Season-Artwork-CMS-4500x45006-Large-990x990.jpeg"
                  alt=""
                />
              </div>
              <div class="spring-wrapper">
                <h4 class="type--h5-caps">Martin Wesley-Smith, Peter Wesley-Smith</h4>
                <h3 class="type--h1">Boojum!</h3>
                <div class="text type--body-16">7–23 November 2025<br />Horti Hall, Hemstritch Studio</div>
              </div>
            </a>
          </production-tile>
        </div>
      </div>
      <div class="prev disabled"></div>
      <div class="next"></div>
    </div>
  </production-slider>
</template>
