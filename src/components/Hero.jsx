export default function Hero() {

  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {/* <span className='text-[#08284E]'>HIMA</span><span className='text-[#810100]'>TIKA</span> */}
          <span className='text-gray-700'>HIMATIKA</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Himatika adalah sebuah organisasi yang mewadahi mahasiswa jurusan informatika dalam berbagai kegiatan akademik, sosial, dan pengembangan diri. Himatika biasanya bertujuan untuk memajukan bidang informatika serta memperkuat ikatan antaranggota dan kegiatan berbagi pengetahuan.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#departement"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Selengkapnya
          </a>
        </div>
      </div>
    </div>
  )
}
