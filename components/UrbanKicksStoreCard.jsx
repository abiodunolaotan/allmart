import { vendors } from "@/constants/mockData";
import Image from "next/image";
import Link from "next/link";



const UrbanKicksStoreCard = () => {
    const {id, name, category, rating, image, description}= vendors[1];
  return (
    <div className=" rounded-2xl">
      <div key={id} className="bg-[#C4CED3] w-full h-56 flex justify-center rounded-t-2xl items-center ">
        <Image
        src={image}
        alt={name}
        width={310}
        height={300}
        className="bg-cover w-90 h-full rounded-t-2xl"
        />
      </div>

      <div className="bg-[#E7F0FF] rounded-b-2xl p-3">
        <div className="flex justify-between items-center">
          <p className="text-[#6B778E]">{category}</p>
          <div className=" font-bold flex justify-between items-center gap-1.5">
            <i className="fa-regular fa-star text-[#13244A]"></i>
            <p>{rating}</p>
          </div>
        </div>

        
        <h3 className="text-[#13244A] font-bold text-2xl my-4">{name}</h3>
        <p className="text-[#6B778E]">{description}</p>
        <div className="flex justify-between items-center mt-3 text-[#13244A] font-semibold mb-7">
          <Link href="/"><p>Explore store</p></Link>
          <Link href="/"><i className="fa-solid fa-arrow-right text-[#13244A]"></i></Link>
        </div>
      
      </div>
      
    </div>
  )
}

export default UrbanKicksStoreCard
