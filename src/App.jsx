const App = () => {
  return (
    <div className="grid items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold underline text-green-500">
          Hello world!
        </h1>
        <h1 className="text-2xl font-bold underline text-red-500">
          welcome to MuktoBatash!
        </h1>
        <h1 className="text-xl font-bold underline text-yellow-500">
          Today: {Date().toString()}
        </h1>
      </div>
    </div>
  );
};

export default App;
