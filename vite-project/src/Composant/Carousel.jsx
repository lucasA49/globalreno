export default function Carousel() {
  return (
    <div className="px-4">
      <h4 className="mt-4 text-lg font-semibold text-left">Nos Partenaires</h4>

      <div className="w-full overflow-x-auto md:overflow-x-hidden">
        <div className="flex gap-6 md:justify-center md:gap-10 h-[20vh] md:h-[20vh] min-w-max">
          <img src="/jefco.webp" alt="jefco" className="h-32 md:h-48 flex-shrink-0" />
          <img src="/seigneurie.png" alt="seigneurie" className="h-32 md:h-48 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}
