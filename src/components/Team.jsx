const peoples = [
  { name: 'Jean Rheifany', position: 'Ketua Himatika', img: '/assets/anggota/jean.webp' },
  { name: 'Rahmadi', position: 'Wakil Ketua Himatika', img: '/assets/anggota/rahmadi.webp' },
  { name: 'Putri Maulida', position: 'Bendahara 1', img: '/assets/anggota/putri.webp' },
  { name: 'Rafa', position: 'Bendahara 2', img: '/assets/anggota/rafa.webp' },
  { name: 'Tyas', position: 'Sekretaris', img: '/assets/anggota/tyas.webp' },
  { name: 'Zikri Ahmad Suanda', position: 'Kadep Ristek', img: '/assets/anggota/zikri.webp' },
  { name: 'Al-Hamka', position: 'Kadep Medinfo', img: '/assets/anggota/hamka.webp' },
  { name: 'Ari', position: 'Kadep Jangker', img: '/assets/anggota/ari.webp' },
  { name: 'Biyan', position: 'Kadep PSDM', img: '/assets/anggota/biyan.webp' },
  { name: 'Fadil', position: 'Kadep Adkesma', img: '/assets/anggota/padil.webp' },
]

export default function Team() {
  return (
    <div className="mt-64 flex flex-col gap-24" id="anggota">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
          <span className='text-gray-700'>Anggota</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row md:justify-center lg:justify-center md:flex-wrap lg:flex-wrap gap-12">
        {peoples.map((people) => {
          return (
            <div key={people.name} className="flex flex-col items-center gap-7">
              <img src={people.img} alt="" className="h-52 w-52 rounded-full object-cover bg-[url('/assets/bg.png')]" draggable="false"/>
              <div className="flex flex-col items-center">
                <h2 className="font-semibold text-2xl">{people.name}</h2>
                <p>{people.position}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}