import { useParams } from "solid-start";

import { For, Show, createEffect, createSignal, onMount } from "solid-js";
import IMAGES from "~/utils/images";
import { Motion, Presence } from "@motionone/solid";
import { Rerun } from "@solid-primitives/keyed";
// import { A } from "@solidjs/router";
import { Background, EmailForm, setOpen } from "..";
import { Nav } from "..";

export default function University() {
  const [active, setActive] = createSignal(0);
  const [scroll, setScroll] = createSignal(0);
  const [images, setImages] = createSignal([] as string[]);
  const [pid, setPid] = createSignal<keyof typeof IMAGES>();
  const handleActive = () => {
    const max = images().length;
    setActive((active() + 1) % max);
  };
  const i = useParams();
  createEffect(() => {
    const pid = i.pid as keyof typeof IMAGES;
    setImages(IMAGES[pid]);
    setPid(pid);
  });

  setInterval(handleActive, 5000);
  const handleScrollVar = () => {
    const htmlElement = window.document.documentElement;
    const percentageOfScreenScrolled =
      htmlElement.scrollTop / htmlElement.clientHeight;
    setScroll(Math.min(percentageOfScreenScrolled * 100, 100));
  };
  onMount(() => {
    window.addEventListener("scroll", handleScrollVar);
    window.addEventListener("resize", handleScrollVar);
  });
  return (
    <Presence>
      <Rerun on={pid}>
        {" "}
        <Motion
          animate={{
            y: 0,
            opacity: 1,
          }}
          initial={{
            y: 10,
            opacity: 0,
          }}
          class="bg-primary relative"
          onClick={() => setOpen(false)}
        >
          <Background class="absolute inset-0 md:right-0 md:bottom-0 md:left-[10%] md:top-0 z-0" />
          <Nav />
          <main
            style={{
              translate: `0 ${((Math.max(scroll(), 25) - 25) * 100) / 90}%`,
              scale: `${Math.max(1 - scroll() / 100, 0.95)}`,
            }}
            class="text-center mx-auto sm:min-h-screen sm:grid sm:grid-cols-5 sticky translate-y-0 ease-in-out"
          >
            <div class="container sm:h-screen overflow-hidden isolate -z-1 sm:sticky sm:col-span-3 top-0 flex">
              <Presence>
                <Rerun on={active}>
                  <Motion.img
                    class="w-full aspect-video sm:sticky object-cover rounded"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    // exit={{ opacity: 0, x: -20 }}
                    src={images()[active()]}
                    alt=""
                  />
                </Rerun>
              </Presence>
            </div>
            <div
              // style={{
              //   translate: `${((Math.max(scroll(), 0) - 0) * 100) / 1}% -${
              //     ((Math.max(scroll(), 50) - 50) * 100) / 40
              //   }%`,
              // }}
              class="sm:min-h-screen flex justify-center items-center z-10 col-span-2 p-4 sm:h-screen sticky text-white text-2xl font-bold"
            >
              <section class="relative sm:max-w-[512px] px-5 md:pb-32">
                <h1 class="text-2xl sm:text-3xl my-10 uppercase">
                  University of {pid()}
                </h1>
                <h2 class=" text-white mb-3 text-xl sm:text-2xl font-custom font-bold max-w-4xl md:leading-tight text-white/80 ">
                  Get a Free Consultation Now
                </h2>
                <div class="">
                  <EmailForm />
                </div>
              </section>{" "}
            </div>
          </main>
          <section
            style={{
              translate: `0 -${((Math.max(scroll(), 50) - 100) * 100) / 90}%`,
            }}
            class="min-h-screen bg-white p-4 z-1 sticky shadow-lg rounded"
          >
            <div
              style={{
                background: "rgba(20, 129, 184, 0.08)",
              }}
              class="flex relative isolate bg-slate-100/60 backdrop-blur-2xl rounded-xl p-10 md:p-16 z-50 flex-wrap gap-x-20 gap-y-24 m-10 shadow-lg min-h-screen"
            ></div>
          </section>
        </Motion>
      </Rerun>
    </Presence>
  );
}
