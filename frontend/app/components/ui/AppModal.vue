<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[9998] flex items-center justify-center p-4"
        @click.self="handleBackdrop"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        <!-- Modal -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="modelValue"
            :class="['relative bg-white rounded-2xl shadow-2xl w-full max-h-[90vh] overflow-y-auto', sizeClasses]"
          >
            <!-- Header -->
            <div v-if="title || $slots.header" class="flex items-center gap-3 p-6 pb-0">
              <div
                v-if="icon"
                :class="['w-10 h-10 rounded-full flex items-center justify-center', iconBgClass]"
              >
                <Icon :name="icon" :class="['w-5 h-5', iconColorClass]" />
              </div>
              <div class="flex-1">
                <slot name="header">
                  <h3 class="text-lg font-heading font-bold text-charcoal">{{ title }}</h3>
                  <p v-if="description" class="text-sm text-slate mt-0.5">{{ description }}</p>
                </slot>
              </div>
              <button
                v-if="closable"
                class="p-1.5 rounded-lg hover:bg-surface transition-colors"
                @click="$emit('update:modelValue', false)"
              >
                <Icon name="material-symbols:close" class="w-5 h-5 text-slate" />
              </button>
            </div>

            <!-- Body -->
            <div class="p-6">
              <slot />
            </div>

            <!-- Footer -->
            <div v-if="$slots.footer || showActions" class="flex items-center justify-end gap-3 px-6 pb-6">
              <slot name="footer">
                <button
                  class="btn-ghost"
                  @click="$emit('update:modelValue', false)"
                >
                  {{ cancelText }}
                </button>
                <button
                  :class="confirmVariant === 'danger' ? 'bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-colors' : 'btn-primary'"
                  @click="$emit('confirm')"
                >
                  {{ confirmText }}
                </button>
              </slot>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: boolean
  title?: string
  description?: string
  icon?: string
  iconVariant?: 'primary' | 'danger' | 'warning' | 'info'
  size?: 'sm' | 'md' | 'lg'
  closable?: boolean
  closeOnBackdrop?: boolean
  showActions?: boolean
  confirmText?: string
  cancelText?: string
  confirmVariant?: 'primary' | 'danger'
}>(), {
  closable: true,
  closeOnBackdrop: true,
  size: 'md',
  iconVariant: 'primary',
  showActions: false,
  confirmText: 'ยืนยัน',
  cancelText: 'ยกเลิก',
  confirmVariant: 'primary',
  title: undefined,
  description: undefined,
  icon: undefined
})

const emit = defineEmits(['update:modelValue', 'confirm'])

const sizeClasses = computed(() => ({
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-2xl'
}[props.size]))

const iconBgClass = computed(() => ({
  primary: 'bg-primary-50',
  danger: 'bg-red-50',
  warning: 'bg-amber-50',
  info: 'bg-teal-50'
}[props.iconVariant]))

const iconColorClass = computed(() => ({
  primary: 'text-primary',
  danger: 'text-red-500',
  warning: 'text-amber-500',
  info: 'text-teal-500'
}[props.iconVariant]))

const handleBackdrop = () => {
  if (props.closeOnBackdrop) emit('update:modelValue', false)
}
</script>
