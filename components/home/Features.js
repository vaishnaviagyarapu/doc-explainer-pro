export default function Features() {
  const features = [
    {
      title: "Approval Engine",
      desc: "Automate workflows like leave and fee approvals easily.",
    },
    {
      title: "Student Portal",
      desc: "Students access updates, results, and communication in one place.",
    },
    {
      title: "Admin Dashboard",
      desc: "Track operations and manage everything efficiently.",
    },
  ];

  return (
    <section className="py-24 px-6 text-center">

      <h2 className="text-4xl font-bold">
        Everything you need to manage your institution
      </h2>

      <div className="mt-14 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">

        {features.map((item, i) => (
          <div
            key={i}
            className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-gray-600">{item.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}