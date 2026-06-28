function Filter({
  filterData,
  category,
  setCategory,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-8">
      {filterData.map((item) => (
        <button
          key={item.id}
          onClick={() => setCategory(item.title)}
          className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300
          ${
            category === item.title
              ? "bg-blue-600 text-white"
              : "bg-slate-700 text-white hover:bg-slate-600"
          }`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}

export default Filter;
