const ProgressBarElement = () => {
    return ( 
        <div>
            <div className="flex flex-col items-center w-5/6 h-96 mt-40 ml-32">
                <div className="flex justify-between items-center mb-4 text-white w-full">
                    <span className="text-lg font-mono">HTML</span>
                    <span className="text-sm font-mono">80%</span>
                </div>
                <div className="w-full bg-red-400 rounded h-6">
                   
                </div>
            </div>  
        </div>
    );
};

export default ProgressBarElement;