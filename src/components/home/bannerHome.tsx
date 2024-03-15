export default function BannerHome({
  nome,
  colors,
  valid,
}: {
  nome: string;
  colors: any;
  valid: boolean;
}) {
  return (
    <div
      className={`${
        valid ? "bg-red-500" : "bg-green-500"
      } w-full h-52 lg:h-64 my-8 rounded duration-300 transition-colors`}
      onMouseEnter={colors}
      onMouseLeave={colors}
    >
      <button onClick={colors} className="p-2 bg-slate-400 text-xl font-medium">
        enviar
      </button>
      <h1>{nome}</h1>
    </div>
  );
}
