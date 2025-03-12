<script setup></script>

<template>
  <div class="bg-[#B7FBFE]">
    <header class="flex items-center justify-between">
      <div class="pt-10 pl-15">
        <img class="pointer-events-none h-45" src="/logo.png" alt="Logo" />
      </div>
      <div class="flex space-x-30 mb-17">
        <ul>
          <div class="absolute inset-x-150 h-0.5 bg-blue-300"></div>
          <li class="text-[1.8rem] cursor-pointer hover:text-purple-500 mt-2">История</li>
        </ul>
        <ul>
          <li class="text-[1.8rem] cursor-pointer hover:text-blue-500 mt-2">Университет</li>
        </ul>
        <ul>
          <li class="text-[1.8rem] cursor-pointer hover:text-green-500 mt-2">Викторины</li>
        </ul>
      </div>
      <div class="flex items-center space-x-2 pr-10 mb-25">
        <img class="pointer-events-none h-15" src="/avatar.png" alt="Avatar" />
        <img class="pointer-events-none h-15" src="/avatar.png" alt="Avatar" />
        <img class="pointer-events-none h-15" src="/avatar.png" alt="Avatar" />
      </div>
    </header>
  </div>
</template>
