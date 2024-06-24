import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-middle   ">
      <main className="max-w-[1250px] w-full h-full flex flex-col justify-between flex-1 gap-12">
        <nav className="flex align-middle w-full justify-center fixed top-6 left-0 right-0 ">
          <div className="flex gap-6 align-middle w-full justify-between max-w-[1250px] px-24 items-center">
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
              <Link href="/about" className="text-xl font-bold text-blue-500">
                About
              </Link>
              <Link href="/contact" className="text-xl font-bold text-blue-500">
                Contact
              </Link>
            </div>

            <div>
              <button className="py-2 px-4 bg-[#E45826] rounded-full text-white font-bold">
                Coming soon
              </button>
            </div>
          </div>
        </nav>

        <section className="w-full flex gap-[180px]">
          <div className="flex max-w-[580px] pl-24 mt-[170px] h-[800px] items-center">
            <div>
              <div className="flex gap-3 flex-col">
                <h1 className="text-6xl font-bold">Designs that</h1>
                <div className="relative">
                  <h1 className="text-6xl font-bold">empowers your</h1>
                  <div className="absolute top-0 left-0">
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

                <h1 className="text-6xl font-bold">brand</h1>
              </div>

              <p className="text-sm mt-6">
                Seeking a website that goes beyond standard templates and
                frameworks? Our development team specializes in custom code and
                design, ensuring your online presence is optimized for
                performance and tailored to your exact specifications.
              </p>
            </div>
          </div>

          <div>
            <div className="absolute right-0  top-[170px] bg-[#E45826] h-[800px] w-[48%] pointer-events-none rounded-l-full z-0 flex items-center">
              <div className="w-[340px] h-[340px] rounded-full bg-white ml-[200px] flex justify-center item-center overflow-hidden">
                {/* @ts-ignore */}
                <dotlottie-player
                  src="https://lottie.host/09972e00-7c13-4062-a251-757c0feefbc3/VaJOZ1OSbN.json"
                  background="transparent"
                  speed="0.65"
                  style={{ width: 300, height: 300, paddingTop: 20 }}
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="flex justify-between px-24 pb-12 gap-12 items-center">
          <div className="w-[280px]">
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
            <a className="text-sm" href="https://www.facebook.com/muroto">
              <div className="text-xl font-bold w-[100px] h-[100px] bg-[#324ba0] rounded-full flex justify-center items-center m-6">
                <p className="font-bold text-sm text-white">Let's talk</p>
              </div>
            </a>
          </div>

          <div className="w-[280px]">
            <p className="text-xs text-right">
              Weaving together creativity to link people to cutting-edge
              technology.
            </p>
          </div>
        </footer>
      </main>
      <div className="bg-dots" />
      <div className="bg-dots" />
      <div className="bg-dots" />
    </div>
  );
}
