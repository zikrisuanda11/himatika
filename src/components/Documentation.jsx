import { useState } from "react"
import Modal from "./Modal"

export default function Documentation() {
  const [open, setOpen] = useState(false)
  const [img, setImg] = useState()

  const imgOnClick = (src) => {
    setImg(src)
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        img={img}
      />
      <div className="mt-64 flex flex-col md:flex-row lg:flex-row mx-12  gap-24 items-center">
        <div className="md:w-1/2 lg:w-1/2 flex flex-col gap-12 md:gap-20 lg:gap-20 items-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
            <span className='text-gray-700'>Dokumentasi Kegiatan</span>
          </h1>
          <p className="w-9/12 text-center">Dokumentasi kegiatan adalah jendela yang membawa kita pada perjalanan melalui kenangan yang berharga, mengabadikan momen-momen berharga, dan menyediakan catatan tak ternilai tentang perjalanan sukses dan perkembangan yang telah kita capai dalam berbagai aspek kehidupan.</p>
        </div>
        <div className="relative md:w-1/2 lg:w-1/2 flex flex-col md:flex-row lg:flex-row gap-12 justify-center ">
          <div className=" flex flex-col gap-12 relative items-center ">
            <img src="/icons/half_circle.png" alt="" className="invisible md:visible lg:visible absolute w-16 bottom-24 -left-10 z-0" />
            <div className="z-10 ">
              <img onClick={(e) => {
                imgOnClick(e.target.getAttribute("src"))
              }} src="/assets/dok3.webp" alt="" className="w-64 h-64 object-cover rounded-2xl shadow-md hover:-translate-x-2 hover:-translate-y-2 transition duration-300 hover:cursor-pointer" />
            </div>
            <div className="z-10 ">
              <img onClick={(e) => {
                imgOnClick(e.target.getAttribute("src"))
              }} src="/assets/dok6.webp" alt="" className="w-64 h-64 object-cover rounded-2xl shadow-md hover:-translate-x-2 hover:-translate-y-2 transition duration-300 hover:cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col gap-12 relative items-center ">
            <img src="/icons/circle2.png" alt="" className="invisible md:visible lg:visible absolute h-16 w-16 -right-5 -top-10 z-0" />
            <img src="/icons/dot_grid.png" alt="" className="invisible md:visible lg:visible absolute w-24 -bottom-10 -right-10 z-0" />
            <div className="z-10">
              <img onClick={(e) => {
               imgOnClick(e.target.getAttribute("src")) 
              }} src="/assets/dok2.webp" alt="" className="w-64 h-64 object-cover rounded-2xl shadow-md hover:-translate-x-2 hover:-translate-y-2 transition duration-300 hover:cursor-pointer" />
            </div>
            <div className="z-10">
              <img onClick={(e) => {
               imgOnClick(e.target.getAttribute("src")) 
              }} src="/assets/dok4.webp" alt="" className="w-64 h-64 object-cover rounded-2xl shadow-md hover:-translate-x-2 hover:-translate-y-2 transition duration-300 hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}