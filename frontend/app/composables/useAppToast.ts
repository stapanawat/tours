// Global toast notification composable
import { ref } from 'vue'

export interface Toast {
    id: number
    type: 'success' | 'error' | 'warning' | 'info'
    message: string
    duration?: number
}

const toasts = ref<Toast[]>([])
let nextId = 0

export const useAppToast = () => {
    const addToast = (type: Toast['type'], message: string, duration = 5000) => {
        const id = nextId++
        toasts.value.push({ id, type, message, duration })
        if (duration > 0) {
            setTimeout(() => removeToast(id), duration)
        }
    }

    const removeToast = (id: number) => {
        toasts.value = toasts.value.filter(t => t.id !== id)
    }

    return {
        toasts,
        removeToast,
        success: (msg: string, duration?: number) => addToast('success', msg, duration),
        error: (msg: string, duration?: number) => addToast('error', msg, duration),
        warning: (msg: string, duration?: number) => addToast('warning', msg, duration),
        info: (msg: string, duration?: number) => addToast('info', msg, duration),
    }
}
