import Image from "next/image";

export function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around my-16 items-center px-5">
      <div className="basis-1/2 grow-0 shrink-0">
        <h1 className="text-5xl my-10">Орігамі Україна</h1>
        <h2 className="text-2xl text-gray-500">
          Навчись мистетсву орігамі, це не складно і цікаво. На нашому сайті є
          інструкції на розкладки, книжки, новини, воркшопи, тощо.
        </h2>
      </div>
      <div className="basis-1/2">
        <Image
          src="/design1/paper-dragon.png"
          alt="Hero Image"
          width={1024}
          height={1024}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
