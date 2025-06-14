import { Input } from "@/components/ui/input";
import { LiaArrowRightSolid } from "react-icons/lia";

export default function Contact() {
  return (
    <div className="p-20  bg-white text-black">
      <div className="flex">
        <div className="bg-amber-400 w-4 h-4 rounded-full mt-1 mr-3"></div>

        <p className="text-xl font-medium w-[100px]">Холбогдох</p>
      </div>

      <div className="ml-80 ">
        {" "}
        <h1 className="text-5xl font-medium w-[750px] text-[#29292a]">
          {" "}
          "Амжилт бол хурдан биш, тууштай алхаж байж ирдэг зам."
        </h1>
        <div className="my-10">
          <p className="font-light">Холбогдоход таатай байна.</p>
          <p className="font-light">
            Над руу мессеж илгээж,
            <a className="cursor-pointer underline pl-1">имэйл </a>
            бичих эсвэл
            <a className="cursor-pointer underline pl-1">утсаар </a>
            холбогдоорой.
          </p>
        </div>
        <div className="flex gap-6">
          <div className="text-xs font-medium">
            Нэр
            <Input
              className="w-[300px] mt-1 border-b border-[#919194] bg-white text-black"
              placeholder="Rachel"
            ></Input>
          </div>
          <div className="text-xs font-medium">
            Овог
            <Input
              className="w-[300px] mt-1 border-b border-[#919194] bg-white text-black"
              placeholder="Lee"
            ></Input>
          </div>
        </div>
        <div>
          <div className="my-4 text-xs font-medium">
            Имэйл хаяг
            <Input
              className="w-[625px] mt-1 border-b border-[#919194] bg-white text-black"
              placeholder="rachel.lee@example.com"
            ></Input>
          </div>
          <div className="my-4 text-xs font-medium">
            Мессеж
            <Input
              className="w-[625px] mt-1 border-b border-[#919194] bg-white text-black"
              placeholder="Мессежээ бичнэ үү..."
            ></Input>
          </div>
        </div>
        <div className="bg-[#c9bafb] w-[140px] h-[40px] rounded-xl flex justify-center items-center text-xl mt-10 hover:bg-[#a8d1f8] pl-2">
          Илгээх
          <LiaArrowRightSolid className="m-2" />
        </div>
      </div>
    </div>
  );
}
