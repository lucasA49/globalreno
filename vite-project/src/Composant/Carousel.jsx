export default function Carousel() {
  return (
    <div>
      <h4 className="flex mt-2 ml-10 h-7">Nos Partenaires</h4>
      <div className="w-full bg-white-300 h-[20vh] md:h-[20vh] overflow-hidden relative flex space-between gap-10">
      <img src="/jefco.webp" alt="" className="h-48" />
      <img src="/seigneurie.png" alt="" className="h-48" />
      <img src="/ultima.png" alt="" className="h-48" />
      <img src="/gdk.jpg" alt="" className="h-48" />
      </div>
    </div>
  );
}
