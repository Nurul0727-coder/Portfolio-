import Image from "next/image";
import { LiaArrowRightSolid } from "react-icons/lia";

export default function HomePage() {
  return (
    <div className="bg-white w-full h-auto text-black pt-20 ">
      <div className="flex">
        <div className="ml-20 ">
          {" "}
          <h1 className="text-5xl font-medium w-[750px] text-[#29292a]">
            {" "}
            "Өнөөдөр бичсэн жижиг код чинь маргаашийн агуу системийн суурь байж
            мэднэ."
          </h1>
          <p className="text-xl mt-10 w-[700px]">
            Сайн уу! Би Fullstack developer-оор Pinecone Academy-г сурч төгссөн.
            Хийж байгаа төсөлдөө анхаарч, шинэ орчин хамт олонд хурдан дасан
            зохицох чадвартай.
          </p>
          <p className="mt-7 w-[700px] text-xl ">
            {" "}
            Би олон баг хамт олонтой  ажиллаж байсан туршлагатай учраас бие даан
            суралцах, багийн гишүүдтэйгээ хамтран ажиллахад тухтай хүн нь байж
            чаддаг .
          </p>
          <p className="mt-7 w-[700px] text-xl">
            Суралцахаа хэзээ ч зогсоохгүй, өдөр бүр код бичиж, шинэ технологи
            туршиж, багаараа хамтран ажиллах соёлыг эрхэмлэдэг.
          </p>
          <p className="mt-7 w-[700px] text-xl">
            Ирээдүйд илүү том, нөлөө бүхий төслүүд дээр хувь нэмрээ оруулдаг,
            найдвартай хөгжүүлэгч болохоор зорьж байна.
          </p>
          <div className="bg-[#f86c30] w-[170px] h-[40px] rounded-xl flex justify-center items-center text-xl mt-10 hover:bg-[#ec5514] pl-2">
            Talk to me
            <LiaArrowRightSolid className="m-2" />
          </div>
        </div>

        <div className="flex justify-end">
          <Image
            src="/Gegee.jpg"
            alt="image"
            width={320}
            height={460}
            className="rounded-2xl ml-14 mb-30"
          />
        </div>
      </div>
    </div>
  );
}
