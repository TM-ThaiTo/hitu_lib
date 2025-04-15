import { Button } from "~/components/ui/button";
import Icons from "~/components/share/icons";

export default function SearchButton() {
    return (
        <Button
            variant="ghost"
            size="sm"
            className="w-9 aspect-square rounded-full px-0 relative border bg-[#0959ca] border-gray-300 hover:bg-[#074cb3] hover:border-[#074cb3] transition-colors duration-200"
        >
            <Icons.search className="text-white group-hover:text-white" />
        </Button>
    );
}
