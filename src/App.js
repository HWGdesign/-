import Form from "./Components/Form";

function App() {
  return (
    <main className=" flex w-full h-screen">
      <div className="flex w-full h-screen items-center justify-center lg:w-full bg-gradient-to-tr from-sky-200 to-blue-400">
        <div className="flex items-center justify-center rounded-3xl bg-white shadow-sm px-10 py-32">
          <div>
            <Form />
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
