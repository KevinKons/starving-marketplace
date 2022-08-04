import Logo from '../Logo'

export default function AdminNavbar() {
    return (
        <nav class='flex flex-col items-center bg-black w-56 min-h-screen pt-10'>
            <a href='/'>
                <Logo class='text-white' />
            </a>
            <a href="/create" class="h-8 py-1 px-4 mt-10 font-bold text-black bg-yellow-400 hover:bg-yellow-500">
                Create NFT
            </a>
        </nav>
    )
}