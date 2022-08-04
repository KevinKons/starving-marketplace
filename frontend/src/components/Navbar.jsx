import Nullstack from 'nullstack';
import Logo from '../components/Logo'

class Navbar extends Nullstack {
  render() {
    return (
      <nav class="text-white">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="flex-1 flex justify-between items-center">
              <Logo />
              <div class="hidden sm:block sm:ml-6">
                <div class="flex space-x-4">
                  <a href="/home" class="px-3 py-2 text-sm font-semibold">Home</a>

                  <a href="/wtf" class="px-3 py-2 text-sm font-normal">WTF?</a>

                  <a href="/explore" class="px-3 py-2 text-sm font-normal">Explore</a>

                  <a href="/taps" class="px-3 py-2 text-sm font-normal">TAPs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;