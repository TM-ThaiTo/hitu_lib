
interface Props {
    title: string;
}

export default function TitleSlider({ title }: Props) {
    return (
        <div className="flex items-center mb-6 w-full">
            <div className="flex items-center space-x-2">
                <h2 className="text-lg sm:text-lg font-bold text-gray-900">{title}</h2>
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
            </div>
            <div className="flex-1 flex flex-col space-y-0.5">
                <div className="h-[1px] bg-gray-200"></div>
                <div className="h-[1px] bg-gray-200"></div>
            </div>
        </div>
    )
}