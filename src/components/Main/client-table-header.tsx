export const ClientTableHeader = () => {
  return (
    <header className="flex gap-4 items-center px-6 py-3 w-full rounded-3xl bg-white bg-opacity-40 max-md:px-5">
      <div className="grid grid-cols-12 gap-4 w-full">
        <h2 className="col-span-3 text-sm font-medium text-neutral-900">Client Full Name</h2>
        <h2 className="col-span-3 text-sm font-medium text-neutral-900">E-mail</h2>
        <h2 className="col-span-3 text-sm font-medium text-neutral-900">Phone Number</h2>
        <h2 className="col-span-3 text-sm font-medium text-neutral-900">Last Session Date</h2>
      </div>
    </header>
  );
};
