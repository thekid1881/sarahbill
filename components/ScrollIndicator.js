export default function ScrollIndicator() {
    return (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2 animate-bounce">
                <span className="w-3 h-3 bg-[#1F2937] rounded-full"></span>
                <span className="w-1 h-3 bg-[#1F2937] rounded"></span>
            </div>
        </div>
    );
}