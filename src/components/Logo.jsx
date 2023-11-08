export default function Logo() {
  return (
    <div className="flex flex-col items-center gap-24 mx-10">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" id="departement">
          {/* <span className='text-[#08284E]'>HIMA</span><span className='text-[#810100]'>TIKA</span> */}
          <span className='text-gray-700'>Departement</span>
        </h1>
        <p className="text-center">Departemen Himatika di kabinet Yodha Sahitya</p>
      </div>
      <div className="flex flex-wrap gap-10 justify-center object-contain mx-auto">
        <img src="/icons/ristek.png" alt="" className="w-auto h-20" draggable="false"/>
        <img src="/icons/medinfo.png" alt="" className="w-auto h-20" draggable="false"/>
        <img src="/icons/danwira.png" alt="" className="w-auto h-20" draggable="false"/>
        <img src="/icons/kabinet.png" alt="" className="w-auto h-20" draggable="false"/>
        <img src="/icons/psdm.png" alt="" className="w-auto h-20" draggable="false"/>
        <img src="/icons/jangker.png" alt="" className="w-auto h-20" draggable="false"/>
        <img src="/icons/adkesma.png" alt="" className="w-auto h-20" draggable="false"/>
      </div>
    </div>
  )
}