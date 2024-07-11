import SearchBar from "./SearchBar"
import UserProfile from "./UserProfile"
import ThemeIcons from "./ThemeIcons"

export default function TopBar() {
    return <div className="flex items-center justify-between rounded-lg bg-white border p-5">
        <UserProfile />
        <SearchBar />
        <ThemeIcons />
    </div>
}