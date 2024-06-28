import { StarsCircles } from "@/components/stars-circles";
import { ALT_COLOR, ALT_COLOR_LIGHT } from "@/utilities/consts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-middle   ">
      <main className="max-w-[1450px] w-full h-full flex flex-col justify-between flex-1 gap-12">
        <nav className="flex align-middle w-full justify-center fixed pt-6 pb-2 left-0 right-0 bg-white z-50">
          <div className="flex gap-6 align-middle w-full justify-between max-w-[1450px] px-6 md:px-24 items-center">
            <div className="flex gap-6 items-center">
              <Image
                src="/muroto logo.svg"
                width={50}
                height={50}
                alt="Muroto Logo"
              />
              <Link href="/" className="text-xl font-bold text-blue-500">
                Home
              </Link>
              <Link
                href="https://www.linkedin.com/company/muroto/"
                className="text-xl hidden sm:inline-block font-bold text-blue-500"
              >
                About
              </Link>
            </div>

            <div>
              <Link
                href="https://www.linkedin.com/company/muroto/"
                className="py-2 px-4 bg-[#E45826] rounded-full text-white font-bold"
              >
                Contact us
              </Link>
            </div>
          </div>
        </nav>

        <div>
          <section className="w-full flex gap-[180px]">
            <div className="flex xl:max-w-[580px] max-w-full md:max-w-[450px] pr-6 md:pr-0 pl-6 md:pl-24 mt-[120px] md:mt-[170px]  md:h-[650px] items-center z-40">
              <div>
                <div className="flex gap-3 flex-col w-full">
                  <h1 className="text-4xl font-bold xl:text-6xl text-center md:text-left">
                    Designs that
                  </h1>
                  <div className="relative">
                    <h1 className="text-4xl font-bold xl:text-6xl text-center md:text-left">
                      empowers your
                    </h1>
                    <div className="absolute top-0 left-0 xl:inline-block hidden">
                      {/* @ts-ignore */}
                      <dotlottie-player
                        src="https://lottie.host/8b70e5a1-bee6-4f4c-934e-1f27e75279ae/GVlDrBPNif.json"
                        background="transparent"
                        speed="0.65"
                        style={{ width: 300, height: 140 }}
                        loop
                        autoplay
                      />
                    </div>
                  </div>

                  <h1 className="text-4xl font-bold xl:text-6xl text-center md:text-left">
                    brand
                  </h1>
                </div>

                <p className="text-sm mt-6 text-center md:text-left">
                  Seeking a website that goes beyond standard templates and
                  frameworks? Our development team specializes in custom code
                  and design, ensuring your online presence is optimized for
                  performance and tailored to your exact specifications.
                </p>
              </div>
            </div>

            <div className="hidden md:inline-block">
              <div className="absolute right-0  top-[170px] bg-gradient-to-t from-[#E45826] to-[#e5977a] h-[650px] w-[48%] pointer-events-none rounded-l-full z-0 flex items-center">
                <div className="w-[340px] h-[340px] min-w-[340px] rounded-full z-40 bg-white ml-[145px] flex justify-center item-center overflow-hidden">
                  {/* @ts-ignore */}
                  <dotlottie-player
                    src="https://lottie.host/09972e00-7c13-4062-a251-757c0feefbc3/VaJOZ1OSbN.json"
                    background="transparent"
                    speed="0.65"
                    style={{ width: 300, height: 300, paddingTop: 30 }}
                    loop
                    autoplay
                  />
                </div>
                <div className="bg-dots-orange hidden lg:inline-block" />
                <div className="bg-dots-orange hidden lg:inline-block" />
                <StarsCircles />
              </div>
            </div>
          </section>

          <section
            className={`flex overflow-hidden relative justify-center mt-12 items-center h-[500px] md:hidden w-full bg-gradient-to-t from-[${ALT_COLOR}] to-[${ALT_COLOR_LIGHT}]`}
          >
            <div className="w-[340px] h-[340px] min-w-[340px] rounded-full z-40 bg-white  flex justify-center item-center overflow-hidden">
              {/* @ts-ignore */}
              <dotlottie-player
                src="https://lottie.host/09972e00-7c13-4062-a251-757c0feefbc3/VaJOZ1OSbN.json"
                background="transparent"
                speed="0.65"
                style={{ width: 300, height: 300, paddingTop: 30 }}
                loop
                autoplay
              />
            </div>
            <div className="bg-dots-orange  " />
            <div className="bg-dots-orange  " />
            <StarsCircles disablePointer />
          </section>
        </div>

        <footer className="flex justify-between flex-col md:flex-row px-6 md:px-24 pb-12 gap-12 items-center relative">
          <div className="w-[280px] hidden md:inline-block">
            <p className="text-xs">Creative agency located in Toronto</p>
            <p className="text-xs">© 2021 Muroto. All rights reserved</p>
          </div>

          <div className="relative">
            <Image
              style={{ position: "absolute", top: 0, left: 0 }}
              src="/animation-012.svg"
              width={200}
              height={200}
              alt="Muroto Logo"
              className="contact-animation"
            />
            <a
              className="text-sm"
              href="https://www.linkedin.com/company/muroto/"
            >
              <div className="text-xl font-bold w-[100px] h-[100px] bg-[#324ba0] rounded-full flex justify-center items-center m-6">
                <p className="font-bold text-sm text-white">Let&apos;s talk</p>
              </div>
            </a>
          </div>

          <div className="w-[280px]">
            <p className="text-xs text-center md:text-right">
              Weaving together creativity to link people to cutting-edge
              technology.
            </p>
          </div>

          <div className="w-[280px] text-center md:hidden">
            <p className="text-xs">Creative agency located in Toronto</p>
            <p className="text-xs">© 2021 Muroto. All rights reserved</p>
          </div>
          <div className="bg-dots" />
          <div className="bg-dots" />
          <div className="bg-dots" />
        </footer>
      </main>
    </div>
  );
}
