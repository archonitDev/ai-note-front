export const SearchBar = () => {
  return (
    <div className="flex justify-between items-center self-stretch min-w-[100%] xl:min-w-[460px] xl:max-w-[460px] py-0.5 pr-0.5 pl-5 bg-zinc-100 min-h-[52px] rounded-full max-md:max-w-full">
      <input 
        placeholder="Search"
        className="bg-transparent border-none outline-none text-sm leading-none text-neutral-900 w-full placeholder:text-neutral-500"
      />
      <button className="flex overflow-hidden gap-2.5 justify-center items-center self-stretch w-[53.67px] h-[48px] bg-white border border-solid border-[color:var(--Gray-4,#DFDFDF)] rounded-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/22daf4b21d1d4b0a95de48f1bbb2282d/16a5b668d99857fe4bebd9675cb5034e3cac90c9e6b8952d57073ca432d48b5f?placeholderIfAbsent=true"
          alt="Search"
          className="w-5 h-5 object-contain"
        />
      </button>
    </div>
  );
};
