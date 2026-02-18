// Centralized API wrapper with auto error handling (mock mode)
import { useAppToast } from './useAppToast'

interface ApiOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    body?: unknown
    showErrorToast?: boolean
}

interface ApiResponse<T> {
    success: boolean
    data: T | null
    message: string
    errors: Record<string, string[]> | null
}

export const useApi = () => {
    const toast = useAppToast()
    const loading = ref(false)

    const request = async <T>(url: string, options: ApiOptions = {}): Promise<ApiResponse<T>> => {
        const { showErrorToast = true } = options
        loading.value = true

        try {
            // In mock mode, simulate API delay
            await new Promise(resolve => setTimeout(resolve, 500))

            // Mock success response
            return {
                success: true,
                data: null as T,
                message: 'Success',
                errors: null
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            const status = err?.response?.status

            if (status === 401) {
                toast.error('กรุณาเข้าสู่ระบบใหม่')
                navigateTo('/auth/login')
            } else if (status === 422 && showErrorToast) {
                toast.error('กรุณาตรวจสอบข้อมูลที่กรอก')
            } else if (status === 500 && showErrorToast) {
                toast.error('เกิดข้อผิดพลาดจากเซิร์ฟเวอร์')
            } else if (showErrorToast) {
                toast.warning('ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้')
            }

            return {
                success: false,
                data: null,
                message: err?.message || 'Error',
                errors: err?.response?._data?.errors || null
            }
        } finally {
            loading.value = false
        }
    }

    return { request, loading }
}
