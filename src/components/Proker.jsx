

export default function Proker() {
  return (
    <div className="mt-64 flex  flex-col mx-auto justify-center items-center lg:flex-row gap-8" id="proker">
      <div className="w-1/2 h-80 md:h-[36rem] lg:h-[36rem] flex justify-center ">
        <div className="relative rounded-3xl h-full w-72 md:w-96 lg:w-96 bg-[#E5E5E5]">
          <img src="/assets/dok1.webp" alt="" className="h-full w-72 md:w-96 lg:w-96 object-cover rounded-3xl -translate-y-6 -translate-x-6 hover:translate-x-0 hover:translate-y-0 transition duration-500" />
          <svg
            className="absolute -top-16 -right-24 lg:-top-32 lg:-right-36 md:-top-32 md:-right-36 -translate-y-4 -translate-x-4"
            width="70%"
            height="70%"
            fill="none"
            viewBox="0 0 200 200"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-[#14213D]" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="70%" height="70%" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <img src="/icons/circle.png" alt="" draggable="false" className="absolute h-16 w-16 bottom-10 -left-16 lg:w-24 lg:h-24 md:w-24 md:h-24 lg:bottom-14 lg:-left-20 md:bottom-14 md:-left-20"/>
        </div>
      </div>
      <div className="flex flex-col gap-12 w-1/2">
        <div>
          <p className="">Proker</p>
          <h1 className="text-2xl">Berikut beberapa proker kami yang sudah berjalan</h1>
        </div>
        <div className="flex items-center gap-12 flex-wrap">
          <div className="flex flex-col lg:flex-row md:flex-row gap-14 w-full">
            <section className="flex flex-col gap-4 lg:w-1/2 md:w-1/2">
              <div className="flex items-center gap-4">
                <img src="/icons/web.png" alt="" className="h-12 w-auto" />
                <h2 className="font-bold">Website</h2>
              </div>
              <p>Pengembangan Website yang dilakukan oleh Departemen RISTEK</p>
            </section>
            <section className="flex flex-col gap-4 lg:w-1/2 md:w-1/2">
              <div className="flex items-center gap-4">
                <img src="/icons/design.png" alt="" className="h-12 w-auto" />
                <h2 className="font-bold">Design</h2>
              </div>
              <p>Proker yang dikerjakan oleh departement Medinfo</p>
            </section>
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row gap-14">
            <section className="flex flex-col gap-4 lg:w-1/2 md:w-1/2">
              <div className="flex items-center gap-4">
                <img src="/icons/open_rek.png" alt="" className="h-12 w-auto" />
                <h2 className="font-bold">Open Requirement</h2>
              </div>
              <p>Proker Departement PSDM untuk merekrut anggota baru bagi mahasiswa yang tertarik bergabung dengan HIMATIKA</p>
            </section>
            <section className="flex flex-col gap-4 lg:w-1/2 md:w-1/2">
              <div className="flex items-center gap-4">
                <img src="/icons/coorperationship.png" alt="" className="h-12 w-auto" />
                <h2 className="font-bold">Cooperationship</h2>
              </div>
              <p>Proker yang dilakukan oleh departemen JANGKER untuk menjalin kerjasama</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}