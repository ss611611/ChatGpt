function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen 
    px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

        <div>
            <div>
                <div>
                    {/* Sun Icon */}
                    <h2>Examples</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">"Explain Something to me"</p>
                    <p className="infoText">
                        "What is the diffrernce between a dog and a cat?"
                    </p>
                    <p className="infoText">"What is the color of the sun?"</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HomePage