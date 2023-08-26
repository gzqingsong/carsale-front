import request from '@/utils/request'

export function loginByUsername(employeeId, password) {
  return request({
    url: '/seal-login-service/seal/user/login',
    method: 'post',
    params: { employeeId, password }
  })
}

export function logout() {
  return request({
    url: 'seal-login-service/seal/user/login',
    method: 'get'
  })
}

export function getUserInfo(token) {
  return request({
    url: 'seal-login-service/seal/user/login',
    method: 'post',
    params: { token }
  })
}
