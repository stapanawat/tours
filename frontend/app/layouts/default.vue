<template>
  <div class="min-h-screen flex flex-col">
    <AppNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
    <ChatWidget />
    <AppToast />
  </div>
</template>
