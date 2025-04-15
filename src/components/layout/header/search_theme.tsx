import SearchButton from "~/components/share/search-button";
import ThemeToggle from "~/components/share/theme-toggle";

export default function SearchAndTheme() {
    return (
        <div className="flex gap-2 p-2 justify-center">
            <ThemeToggle />
            <SearchButton />
        </div>
    )
}