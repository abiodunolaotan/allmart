
import Link from "next/link";
import { iconList, footer, Groups } from "@/constants/mockData";



const Footer = () => {
    const { icon } = iconList[1];
    const { Brand, Description, Groups, Copyright, BottomLinks } = footer[0];
  return (
    <div className="bg-[#1A1C26] text-white">
        <div className="flex justify-between mx-auto max-w-7xl gap-50 pt-5">
            <div>
                <div className="flex items-center gap-2">
                    <div className=" flex justify-center items-center w-8 h-9 rounded-[10] bg-white"><i className={`${icon}  text-[20px] text-[#13244A]`}></i>
                    </div>
                    <h3 className="text-[#ffffff] text-[27px] font-bold">{Brand}</h3>
                </div>
                <p className="mt-3 text-[#6B778E] w-90">{Description}</p>
            </div>

            <div className="grid grid-cols-3 gap-2.5 w-4xl">
                <div>
                    <h4 className="font-semibold">
                    {Groups[0].title}
                    </h4>
                    <ul className="my-5 text-[#6B778E]">
                        <li><Link href="#">{Groups[0].links[0]}</Link></li>
                        <li><Link href="/wishlist">{Groups[0].links[1]}</Link></li>
                        <li><Link href="#">{Groups[0].links[2]}</Link></li>
                        <li><Link href="#">{Groups[0].links[3]}</Link></li>
                        <li><Link href="#">{Groups[0].links[4]}</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold">
                    {Groups[1].title}
                    </h4>
                    <ul className="my-5 text-[#6B778E]">
                        <li><Link href="#">{Groups[1].links[0]}</Link></li>
                        <li><Link href="#">{Groups[1].links[1]}</Link></li>
                        <li><Link href="#">{Groups[1].links[2]}</Link></li>
                        <li><Link href="#">{Groups[1].links[3]}</Link></li>
                        <li><Link href="#">{Groups[1].links[4]}</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold">
                    {Groups[2].title}
                    </h4>
                    <ul className="my-5 text-[#6B778E]">
                        <li><Link href="#">{Groups[2].links[0]}</Link></li>
                        <li><Link href="#">{Groups[2].links[1]}</Link></li>
                        <li><Link href="#">{Groups[2].links[2]}</Link></li>
                        <li><Link href="#">{Groups[2].links[3]}</Link></li>
                        <li><Link href="#">{Groups[2].links[4]}</Link></li>
                    </ul>
                </div>
            </div>

            

            
        </div>

        <hr className="mx-auto max-w-7xl text-[#6B778E] border-1.5" />

        <div className="mx-auto max-w-7xl flex justify-between py-6 text-[#6B778E]">
            <div>{Copyright}</div>

            <div className="flex gap-6 text-[#6B778E]">
                <Link href="#">{BottomLinks[0]}</Link>
                <Link href="#">{BottomLinks[1]}</Link>
                <Link href="#">{BottomLinks[2]}</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
