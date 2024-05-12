const Loading = () => {
  return (
    <>
      <div className="w-full p-4 md:w-1/2 animate-pulse">
        <article className="hover:shadow-secondary group h-full overflow-hidden rounded-md border-2 border-dotted border-gray-500 p-5 ">
          <h2 className="mb-3 truncate text-2xl font-bold leading-8 tracking-tight bg-gray-400 h-6"></h2>
          <figure className="relative overflow-hidden bg-gray-400 h-48"></figure>
        </article>
      </div>

      <div className="w-full p-4 md:w-1/2 animate-pulse">
        <article className="hover:shadow-secondary group h-full overflow-hidden rounded-md border-2 border-dotted border-gray-500 p-5 ">
          <h2 className="mb-3 truncate text-2xl font-bold leading-8 tracking-tight bg-gray-400 h-6"></h2>
          <figure className="relative overflow-hidden bg-gray-400 h-48"></figure>
        </article>
      </div>
    </>
  );
};

export default Loading;
