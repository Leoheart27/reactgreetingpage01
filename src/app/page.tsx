import { greeting } from "@/components/greeting";

const Page = () => {
  const fullTime = new Intl.DateTimeFormat("pt-BR", {
    timeStyle: "short",
    hour12: false
  }).format();

  const hour = new Date().getHours();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white
    bg-gradient-to-r from-sky-500 to-indigo-700">
      <div className="text-center">{greeting({
        time: fullTime, 
        greet: hour >= 0 && hour < 12 && "Good Morning 🌞" || 
        hour >= 12 && hour < 18 && "Good Afternoon 🌄" || 
        "Good Evening 🌙"
      })}
      </div>
    </div>
  );
};

export default Page