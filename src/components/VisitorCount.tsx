import { useEffect, useState } from "react";

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://yogan-labs.goatcounter.com/counter")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => {});
  }, []);

  if (!count) return null;

  return (
    <div className="text-xs text-zinc-500 mt-6">
      Visits: {count.toLocaleString()}
    </div>
  );
}
