export const sessionApi = {
  // Login function
  async login({ email, password }) {
    // API call to authenticate
    const token = await authenticateUser(email, password)
    localStorage.setItem('token', token)
    return { token }
  },

  // Register function
  async register({ email, password }) {
    try {
      // API call to register the user
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      const { token } = await response.json()
      localStorage.setItem('token', token) // Store the token
      return { token }
    } catch (error) {
      throw new Error(error.message || 'An error occurred during registration')
    }
  },

  // Password Recovery
  async forgotPassword(email) {
    const response = await axiosInstance.post('/forgot-password', { email });
    return response.data;
  },

  // Check authentication status
  async check() {
    const token = localStorage.getItem('token')
    if (!token) throw new Error('Unauthorized')
    return true
  },

  // Logout function
  async logout() {
    localStorage.removeItem('token')
  }
}

