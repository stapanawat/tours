<template>
  <a
    href="https://line.me/ti/p/@voyara"
    target="_blank"
    class="fixed bottom-6 right-6 z-50 group"
    aria-label="Chat on LINE"
  >
    <div class="relative">
      <!-- Pulse ring -->
      <div class="absolute inset-0 rounded-full bg-[#06C755] animate-ping opacity-20" />
      <!-- Button -->
      <div class="relative w-14 h-14 bg-[#06C755] hover:bg-[#05B34D] rounded-full flex items-center justify-center shadow-lg shadow-[#06C755]/30 hover:shadow-xl hover:shadow-[#06C755]/40 transition-all duration-300 hover:-translate-y-1">
        <Icon name="material-symbols:chat-rounded" class="w-7 h-7 text-white" />
      </div>
      <!-- Tooltip -->
      <div class="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-charcoal text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        แชทกับเรา
        <div class="absolute top-full right-4 border-4 border-transparent border-t-charcoal" />
      </div>
    </div>
  </a>
</template>
