interface ClientCardProps {
  client: any; //NOTE: This is a temporary type for the client data
}

export const ClientCard = ({ client }: ClientCardProps) => {
  return (
    <article className=" gap-4 items-center p-6 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
      <div className="grid grid-cols-12 gap-4 items-center self-stretch my-auto min-w-60 max-md:max-w-full">
        <h3 className="col-span-3 self-stretch my-auto text-2xl text-neutral-900">
          {client.name}
        </h3>
        <p className="col-span-3 self-stretch my-auto">{client.email}</p>
        <p className="col-span-3 self-stretch my-auto">{client.phone}</p>
        <p className="col-span-3 self-stretch my-auto">{client.lastSessionDate}</p>
      </div>
    </article>
  );
};
