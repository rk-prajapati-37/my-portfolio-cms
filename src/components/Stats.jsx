import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-red-50 rounded-xl p-8">
      {stats.map((item) => (
        <div key={item.id} className="text-center">
          <h3 className="text-3xl font-bold text-red-600">
            {item.value}{item.suffix}
          </h3>
          <p className="text-gray-700 mt-1">{item.label}</p>
        </div>
      ))}
    </div>
  );
}