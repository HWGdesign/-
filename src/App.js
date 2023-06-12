import Form from "./Components/Form";

function App() {
  return (
    <main className=" flex w-full h-screen">
      <div className="flex w-full h-screen items-center justify-center lg:w-full bg-gradient-to-tr from-sky-200 to-blue-400">
        <div className="flex items-center justify-center rounded-3xl bg-white shadow-sm px-10 py-14">
          <div>
            <Form />
          </div>
        </div>
      </div>

      <div className="w-1/2 hidden lg:flex h-full w-full bg-slate-200 items-center justify-center ">
        <div className="flex items-center justify-center">
          <img
            className="w-4/5 rounded-3xl "
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}

export default App;
