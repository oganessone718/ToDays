import Today from "@/components/today-simple";

export default function HomePage() {
  const todayDate = new Date();
  return (
    <div className="mx-auto max-w-[800px]">
      <div className="flex flex-col items-center">
        <p>{todayDate.toLocaleDateString()}</p>
        <p>오늘 친구들의 ToDays</p>
      </div>
      <div className="flex flex-col justify-center gap-[10px] mx-[20px] w-auto shrink">
        {Array.from({ length: 10 }).map((_, index) => {
          return <Today />;
        })}
      </div>
    </div>
  );
}
