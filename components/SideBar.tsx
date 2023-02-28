import NewChat from "./NewChat";

 function SideBar() {
  return (
    <div className="p-2 fiex flex-col h-screen">
        <div className="fiex-1">
            <div>
                <NewChat />

                <div>
                    {/* ModelSelection */}
                </div>

                {/* Map through the ChatRows */}

            </div>
        </div>
    </div>
  );
}

export default SideBar;