import { z } from 'zod'

// API 响应的 zod schema
const ApiResponse = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.any().nullable(),
})

export async function loginUser(data: { email: string, password: string }) {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const json = await response.json()

  // 验证响应格式
  const result = ApiResponse.safeParse(json)

  if (!result.success) {
    throw new Error('响应格式错误')
  }

  if (!response.ok || !result.data.success) {
    throw new Error(result.data.message || '登录失败')
  }

  return result.data
}

export async function registerUser(data: { email: string, password: string }) {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const json = await response.json()

  // 验证响应格式
  const result = ApiResponse.safeParse(json)

  if (!result.success) {
    throw new Error('响应格式错误')
  }

  if (!response.ok || !result.data.success) {
    throw new Error(result.data.message || '注册失败')
  }

  return result.data
}
