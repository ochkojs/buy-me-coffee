export const LandLeftComponent = () => {
  return (
    <div className="flex flex-col w-[250px] gap-3">
      <ul className="hover:bg-accent rounded-l hover:cursor-pointer p-2">
        Home
      </ul>
      <ul className="hover:bg-accent rounded-l hover:cursor-pointer p-2">
        Explore
      </ul>
      <ul className="hover:bg-accent rounded-l hover:cursor-pointer p-2">
        View Page
      </ul>
      <ul className="hover:bg-accent rounded-l hover:cursor-pointer p-2">
        Account settings
      </ul>
    </div>
  );
};
