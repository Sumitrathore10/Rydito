import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userContext } from '../context/UserContext.jsx'
import toast from 'react-hot-toast'

const UserRegister = () => {
  const navigate = useNavigate()
  const { user, setUser } = useContext(userContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_USER_URL}/register`,
        user,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      )

      if (res.status === 201 || res.data.success) {
        setUser(user)
        localStorage.setItem('token', res.data.token)
        toast.success(`${res.data.user.fullname.firstname} registered successfully`)
        navigate('/user/login')
        setUser({
          fullname: {
            firstname: '',
            lastname: ''
          },
          email: '',
          password: ''
        })
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error during registration')
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col select-none overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src="https://videos.pexels.com/video-files/3063475/3063475-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Blur */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col flex-1">
        {/* Header */}
        <header className="px-4 py-3">
          <h1 className="text-4xl font-semibold text-white tracking-tight poppins">
            Rydito.
          </h1>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 py-4 overflow-auto">
          <div className="w-full max-w-sm sm:max-w-md">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-2xl px-4 font-semibold text-white leading-tight poppins">
                Create a User Account
              </h2>
              <div className="w-[50%] h-1 bg-white/50 rounded-full mx-auto mt-2"></div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
              <form onSubmit={handleSubmit} className="space-y-5 poppins">
                {/* Full Name Fields */}
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="block text-sm text-white mb-1">First Name</label>
                    <input
                      type="text"
                      value={user.fullname.firstname}
                      onChange={(e) => {
                        setUser({
                          ...user,
                          fullname: { ...user.fullname, firstname: e.target.value }
                        })
                      }}
                      required
                      placeholder="John"
                      className="w-full h-12 bg-white/70 rounded-lg px-4 text-sm outline-none text-black placeholder-gray-700"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm text-white mb-1">Last Name</label>
                    <input
                      type="text"
                      value={user.fullname.lastname}
                      onChange={(e) => {
                        setUser({
                          ...user,
                          fullname: { ...user.fullname, lastname: e.target.value }
                        })
                      }}
                      required
                      placeholder="Doe"
                      className="w-full h-12 bg-white/70 rounded-lg px-4 text-sm outline-none text-black placeholder-gray-700"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm text-white mb-1">Email</label>
                  <input
                    value={user.email}
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value })
                    }}
                    type="email"
                    required
                    placeholder="example@gmail.com"
                    className="w-full h-12 bg-white/70 rounded-lg px-4 text-sm outline-none text-black placeholder-gray-700"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm text-white mb-1">Password</label>
                  <input
                    type="password"
                    value={user.password}
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value })
                    }}
                    required
                    placeholder="password"
                    className="w-full h-12 bg-white/70 rounded-lg px-4 text-sm outline-none text-black placeholder-gray-700"
                  />
                </div>

                {/* Login Link */}
                <p className="text-xs text-white text-center">
                  Already have an account?{' '}
                  <Link
                    to="/user/login"
                    className="text-blue-300 font-semibold underline"
                  >
                    Login here
                  </Link>
                </p>

                {/* Register Button */}
                <button
                  type="submit"
                  className="w-full h-12 bg-black text-white rounded-lg font-semibold text-sm hover:bg-gray-900 transition"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-3 text-xs text-white/70">
          © 2025 Rydito. Your trusted platform to register, ride, and reach securely and smoothly, every single time
        </footer>
      </div>
    </div>
  )
}

export default UserRegister
