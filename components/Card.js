export default function Card({ Content }) {
    return (
        <div className="w-70 h-50 md:w-100 md:h-90">
            <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-gray-100 text-black border rounded-lg shadow-md flex items-center justify-center">
                    {Content}
                </div>
            </div>
        </div>
    );
}