import Form from "./Components/Form";

function App() {
  return (
    <main className=" flex w-full h-screen">
      <div className="flex w-full h-screen items-center justify-center lg:w-1/2">
        <div className="  bg-sky-200 h-4/5 w-4/5 rounded-xl p-10">
          <div className=" flex items-center justify-center outline-1 outline-dashed h-full w-full outline-slate-100 outline-2 rounded-md">
            <div> Login & Password & Socials </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 hidden lg:flex h-full w-full bg-slate-200 items-center justify-center ">
        <div className=" w-60 h-60 flex items-center justify-center">
          Some img
        </div>
      </div>
    </main>
  );
}

export default App;
