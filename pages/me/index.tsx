export default function Me() {
  const defaultContent =
    "Hello, I'm Junior Garcia, a software engineer from the Dominican Republic. I'm currently working at @nextui-org as a frontend engineer.";

  return (
    <div
      className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-blue-500"
      style={{ height: 3000 }}
    >
      {defaultContent}
    </div>
  );
}
