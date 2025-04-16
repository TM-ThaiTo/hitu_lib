"use client";
import { CheckIcon, LanguagesIcon } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useChangeLocale, useCurrentLocale } from "~/locales/client";
import { Button } from "~/components/ui/button";

const locales = [
    {
        name: "Vietnamese",
        value: "vi",
    },
    {
        name: "English",
        value: "en",
    },
];

export default function LocaleToggler() {
    const changeLocale = useChangeLocale({ preserveSearchParams: true });
    const currentLocale = useCurrentLocale();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 aspect-square rounded-full px-0 relative border border-gray-300">
                    <LanguagesIcon className=" h-5 w-5 " />
                    <span className="sr-only">Change Locale</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {locales.map((locale) => (
                    <DropdownMenuItem
                        key={locale.value}
                        onClick={() => changeLocale(locale.value as typeof currentLocale)}
                        disabled={locale.value === currentLocale}
                    >
                        <span>{locale.name}</span>
                        {locale.value === currentLocale ? (
                            <DropdownMenuShortcut>
                                <CheckIcon className="h-4 w-4" />
                            </DropdownMenuShortcut>
                        ) : null}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
