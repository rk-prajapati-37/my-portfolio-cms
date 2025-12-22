import { useState, useEffect } from 'react';
import { client } from '../lib/sanity'; // Adjust path based on your setup

const query = `*[_type == "stats"] | order(order asc) {
  _id,
  value,
  suffix,
  label
}`;

export default function Stats() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(query).then((data) => {
      setStats(data);
      setLoading(false);
    }).catch((error) => {
      console.error('Error fetching stats:', error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading stats...</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-red-50 rounded-xl p-8">
      {stats.map((item) => (
        <div key={item._id} className="text-center">
          <h3 className="text-3xl font-bold text-red-600">
            {item.value}{item.suffix}
          </h3>
          <p className="text-gray-700 mt-1">{item.label}</p>
        </div>
      ))}
    </div>
  );
}