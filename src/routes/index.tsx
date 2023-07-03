import { A } from "solid-start";

export default function Home() {
  return (
    <>
      <main class="text- mx-auto text-gray-700 p-4 bg-[#14b8a6] relative overflow-hidden ">
        <Background class="absolute inset-0 md:right-0 md:bottom-0 md:left-[10%] md:top-0" />
        <section class="pb-8 md:pb-32 px-5 z-50  overflow-hidden relative text-white">
          <nav class="flex text-white py-8 max-w-7xl mx-auto  flex-col sm:flex-row w-full justify-between ">
            <div class="flex gap-2 items-center">
              <A href="/" class="font-semibold text-2xl">
                Sktudy
              </A>
            </div>{" "}
            <ul class="flex text-base font-medium gap-8">
              <li>
                <A class="hover:opacity-80" href="#features">
                  Features
                </A>
              </li>
              <li>
                <A class="hover:opacity-80" href="#faq">
                  Faq
                </A>
              </li>
            </ul>
          </nav>
          <h1 class="text-4xl sm:text-6xl lg:text-6xl max-w-5xl font-custom font-[Poppins,sans-serif] font-bold mt-[6rem]">
            Gain Admission to the Top Universities Saskatchewan Can Offer Hello
            world!
          </h1>
          <p class="sm:leading-relaxed max-w-2xl text-2xl mt-8">
            Are you an international student dreaming of pursuing higher
            education in Saskatchewan, Canada? At SKtudy, we are dedicated to
            simplifying your journey and ensuring a seamless registration and
            admission process into prestigious universities across Saskatchewan.
          </p>
        </section>
        <section class="relative">
          <h2 class="mb-3 text-2xl sm:text-2xl font-custom font-bold max-w-4xl md:leading-tight">
            Get a Free Consultation Now
          </h2>
          <div class="">
            <form
              class="flex flex-col sm:flex-row gap-y-2 sm:gap-y-2 max-w-2xl gap-x-2 items-center flex-wrap"
              action="/subscribe"
              accept-charset="UTF-8"
              method="post"
            >
              <input
                type="hidden"
                name="authenticity_token"
                value="XqVopxse9eP23GqA-ha-w_nrAmKRIiDFRWap5M_gct5ZBWd5CHj9noVUATggVVpDzgHYT5h1CYutJ5oTpruTkQ"
                autocomplete="off"
              />
              <input
                type="hidden"
                name="iframe_id"
                id="iframe_id"
                value="myadmissions"
                autocomplete="off"
              />
              <label class="sr-only" for="email">
                Email address
              </label>
              <input
                autocomplete="email"
                required
                class="flex-auto rounded-lg border-0 bg-white px-6 py-3.5 shadow-sm ring-1 ring-black/10 focus:ring-2 w-full focus:ring-black/10 text-slate-900 text-base sm:text-xl sm:leading-6"
                placeholder="Enter your email."
                type="email"
                name="email"
                id="email"
              />
              <input
                type="submit"
                name="commit"
                value="Count Me In."
                class="rounded-lg py-4 whitespace-nowrap px-6 sm:px-12 text-base font-bold sm:text-xl text-white shadow-sm hover:opacity-90 transition focus-visible:outline focus-visible:outline-2 w-full focus-visible:outline-offset-2 focus-visible:outline-white"
                style="background-color: #0f8a7c"
                data-disable-with="Count Me In."
              />
            </form>
          </div>
        </section>
      </main>
      <SectionTwo />
      <FAQ />
      <SectionThree />
      <SectionFour />
    </>
  );
}

const Background = (props: { class: string }) => {
  return (
    <div class={` ${props.class}`}>
      <div
        class={`[&amp;>*]:mb-12 [&amp;>*]:-z-10 [&amp;>*]:absolute [&amp;>*]:right-0 [&amp;>*]:top-0 [&amp;>*]:mx-auto [&amp;>*]:text-white [&amp;>*]:md:h-[120%] [&amp;>*]:mix-blend-plus-lighter [&amp;>*]:opacity-30 `}
      >
        <svg
          class=""
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1124_1291)">
            <mask
              id="mask0_1124_1291"
              style="mask-type:luminance"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="200"
              height="200"
            >
              <path d="M200 0H0V200H200V0Z" fill="white"></path>
            </mask>
            <g mask="url(#mask0_1124_1291)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M200 2.62268e-06V60V200H140V130.033C139.982 168.678 108.649 200 70 200C31.3401 200 0 168.66 0 130C0 91.3401 31.3401 60 70 60C108.649 60 139.982 91.3222 140 129.967V60H70H0V2.62268e-06L140 0L200 2.62268e-06Z"
                fill="url(#paint0_linear_1124_1291)"
              ></path>
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1124_1291"
              x1="157.5"
              y1="32"
              x2="44"
              y2="147.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.0509862"
                stop-color="rgba(20, 75, 184, 0.2)"
              ></stop>
              <stop offset="1" stop-color="rgba(20, 184, 83, 0.2)"></stop>
            </linearGradient>
            <clipPath id="clip0_1124_1291">
              <rect width="200" height="200" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

const SectionTwo = () => {
  return (
    <section id="features" class="px-5 relative py-20 sm:py-32 ">
      <Background class="absolute md:right-[50%] md:bottom-[4rem] md:left-0 " />

      <div class="max-w-7xl mx-auto">
        <div x-on:click="toggle('features')">
          <div class="mb-20 text-center">
            <h2 class="text-4xl md:text-6xl max-w-2xl mx-auto font-custom font-bold md:leading-tight">
              Key Features
            </h2>
            <p class="sm:leading-relaxed text-2xl max-w-2xl mx-auto">
              Why Choose Sktudy?
            </p>
          </div>
          <div class="relative isolate">
            <div
              class="flex relative isolate bg-slate-100/60 backdrop-blur-2xl rounded-xl p-10 md:p-16 z-50 flex-wrap gap-x-20 gap-y-24"
              style="background: rgba(20, 129, 184, 0.08)"
            >
              <div class="lg:flex-[1_1_30%] mx-auto">
                <span
                  class="font-bold text-xl mb-2 block"
                  style="color: #14b8a6"
                >
                  01
                </span>
                <h3 class="text-2xl md:text-3xl mb-2 font-bold">
                  Expert Guidance
                </h3>
                <p class="sm:leading-relaxed text-lg sm:text-xl max-w-2xl">
                  Our agency is staffed with experienced professionals who
                  possess in-depth knowledge of the Saskatchewan education
                  system. They will provide you with expert guidance and
                  personalized advice, ensuring you make informed decisions
                  about your university and program choices.
                </p>
              </div>
              <div class="lg:flex-[1_1_30%] mx-auto">
                <span
                  class="font-bold text-xl mb-2 block"
                  style="color: #14b8a6"
                >
                  02
                </span>
                <h3 class="text-2xl md:text-3xl mb-2 font-bold">
                  Streamlined Application Process
                </h3>
                <p class="sm:leading-relaxed text-lg sm:text-xl max-w-2xl">
                  We understand that applying to universities can be
                  overwhelming, especially for international students. Our
                  agency streamlines the entire application process, helping you
                  complete and submit all the required documents accurately and
                  on time, saving you from unnecessary stress and ensuring a
                  smooth application experience.
                </p>
              </div>
              <div class="lg:flex-[1_1_30%] mx-auto">
                <span
                  class="font-bold text-xl mb-2 block"
                  style="color: #14b8a6"
                >
                  03
                </span>
                <h3 class="text-2xl md:text-3xl mb-2 font-bold">
                  Access to Prestigious Universities
                </h3>
                <p class="sm:leading-relaxed text-lg sm:text-xl max-w-2xl">
                  SKtudy has established strong partnerships with renowned
                  universities in Saskatchewan. Through our agency, you gain
                  access to a wide range of top-tier educational institutions,
                  increasing your chances of securing admission to your
                  preferred university.
                </p>
              </div>
              <div class="lg:flex-[1_1_30%] mx-auto">
                <span
                  class="font-bold text-xl mb-2 block"
                  style="color: #14b8a6"
                >
                  04
                </span>
                <h3 class="text-2xl md:text-3xl mb-2 font-bold">
                  Secure Document Handling
                </h3>
                <p class="sm:leading-relaxed text-lg sm:text-xl max-w-2xl">
                  We take the utmost care to securely handle all confidential
                  documents, protecting the privacy and confidentiality of our
                  clients.
                </p>
              </div>
              <div class="lg:flex-[1_1_30%] mx-auto">
                <span
                  class="font-bold text-xl mb-2 block"
                  style="color: #14b8a6"
                >
                  05
                </span>
                <h3 class="text-2xl md:text-3xl mb-2 font-bold">
                  Comprehensive Support
                </h3>
                <p class="sm:leading-relaxed text-lg sm:text-xl max-w-2xl">
                  Our services go beyond the application process. We offer
                  comprehensive support in various areas, including scholarship
                  and financial aid guidance, visa application assistance,
                  accomodation planning, and pre-departure orientation. With
                  SKtudy, you can rely on us to provide holistic support
                  throughout your educational journey.
                </p>
              </div>
              <div class="lg:flex-[1_1_30%] mx-auto">
                <span
                  class="font-bold text-xl mb-2 block"
                  style="color: #14b8a6"
                >
                  06
                </span>
                <h3 class="text-2xl md:text-3xl mb-2 font-bold">
                  Direct Communication
                </h3>
                <p class="sm:leading-relaxed text-lg sm:text-xl max-w-2xl">
                  We facilitate direct communication between students and the
                  universities, ensuring a smooth flow of information and
                  updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const SectionThree = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient( -45deg,rgba(0,0,0,0.02) 25%,transparent 5% 45%,rgba(0,0,0,0.02) 25% 75%,transparent 55% 95%,rgba(0,0,0,0.02) 95% )",
        "background-size": " 80px 80px",
      }}
      class="bg-slate-50 py-10 sm:mb-24"
    >
      <img
        srcset="/img.png 2x"
        alt="Pricing"
        class="mx-auto mb-4 mt-8"
        src="/img.png"
      />
      <p class="text-3xl text-center my-4 font-semibold opacity-90">
        Pricing Section
      </p>
      <p class="max-w-4xl mx-auto opacity-70 leading-relaxed text-center">
        Looking to sell digital goods without the hassle? With just a few
        clicks, you can add up to 3 slots and convert your landing page into a
        store. Set a price, describe your products in detail, and include a
        checkout link to popular digital stores like LemonSqueezy, Gumroad,
        Stripe, and more.
      </p>
      {/* Pricing section */}
    </div>
  );
};

const SectionFour = () => {
  return (
    <div
      class="w-full mx-auto mt-12 sm:mt-32"
      style="background: rgba(20, 129, 184, 0.08)"
    >
      <div x-on:click="toggle('cta')">
        <section class="py-16 px-5 relative overflow-hidden sm:pt-32">
          <div class="mx-auto items-center flex flex-col gap-2 sm:gap-4 max-w-4xl">
            <h2 class="text-3xl sm:text-5xl md:leading-tight text-center font-bold">
              Gain Admission to the Top Universities Saskatchewan Can Offer
            </h2>
            <div class="mb-16 mt-8 text-center">
              <section class="relative">
                <h2 class="mb-3 text-2xl sm:text-2xl font-custom font-bold max-w-4xl md:leading-tight">
                  Get a Free Consultation Now
                </h2>
                <div class="">
                  <form
                    class="flex flex-col sm:flex-row gap-y-2 sm:gap-y-2 max-w-2xl gap-x-2 items-center flex-wrap"
                    action="/subscribe"
                    accept-charset="UTF-8"
                    method="post"
                  >
                    <input
                      type="hidden"
                      name="authenticity_token"
                      value="kSsR9eyCqtmIglCT3s-TStt9DAFOrTctEsUpqLsLgqaWix4r_-SipPsKOysEjHfK7JfWLEf6HmP6hBpf0lBj6Q"
                      autocomplete="off"
                    />
                    <input
                      type="hidden"
                      name="iframe_id"
                      id="iframe_id"
                      value="myadmissions"
                      autocomplete="off"
                    />
                    <label class="sr-only" for="email">
                      Email address
                    </label>
                    <input
                      autocomplete="email"
                      required
                      class="flex-auto rounded-lg border-0 bg-white px-6 py-3.5 shadow-sm ring-1 ring-black/10 focus:ring-2 w-full focus:ring-black/10 text-slate-900 text-base sm:text-xl sm:leading-6"
                      placeholder="Enter your email."
                      type="email"
                      name="email"
                      id="email"
                    />
                    <input
                      type="submit"
                      name="commit"
                      value="Count Me In."
                      class="rounded-lg py-4 whitespace-nowrap px-6 sm:px-12 text-base font-bold sm:text-xl text-white shadow-sm hover:opacity-90 transition focus-visible:outline focus-visible:outline-2 w-full focus-visible:outline-offset-2 focus-visible:outline-white"
                      style="background-color: #0f8a7c"
                      data-disable-with="Count Me In."
                    />
                  </form>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
      <footer class="max-w-6xl py-10 flex flex-col text-lg px-5 gap-3 sm:gap-8 mx-auto">
        <div class="text-sm">
          <div class="flex justify-center gap-4 py-2.5"></div>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <span class="opacity-40">
              © 2023 © 2023 University Admissions Services for International
              Students All Rights Reserved. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
const FAQ = () => {
  return (
    <section id="faq" class="pb-8 px-5 py-20 sm:py-32">
      <div class="grid lg:grid-cols-3 gap-6 sm:gap-10 max-w-7xl mx-auto">
        <div>
          <h2 class="text-3xl sticky top-6 sm:text-5xl md:leading-tight sm:mb-4 font-bold">
            Frequently Asked Questions
          </h2>
        </div>
        <div class="lg:col-span-2 flex flex-col gap-8 mx-auto">
          <div class="bg-slate-50 rounded-xl p-6 sm:p-10">
            <h3 class="ext-2xl sm:text-3xl sm:mb-2 font-semibold">
              What documents are required for university admissions?
            </h3>
            <p class="sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl">
              Documents like transcripts, passport, letter of intent,
              references, and any additional requirements specified by the
              university.
            </p>
          </div>
          <div class="bg-slate-50 rounded-xl p-6 sm:p-10">
            <h3 class="ext-2xl sm:text-3xl sm:mb-2 font-semibold">
              How long does the admission process take?
            </h3>
            <p class="sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl">
              The admission process duration varies depending on universities
              and programs. We prioritize prompt application submission to
              expedite the process.
            </p>
          </div>
          <div class="bg-slate-50 rounded-xl p-6 sm:p-10">
            <h3 class="ext-2xl sm:text-3xl sm:mb-2 font-semibold">
              Is there any guarantee of admission?
            </h3>
            <p class="sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl">
              While we strive to maximize admission success, final decisions are
              made by the universities themselves. However, we provide expert
              guidance to increase your chances.
            </p>
          </div>
          <div class="bg-slate-50 rounded-xl p-6 sm:p-10">
            <h3 class="ext-2xl sm:text-3xl sm:mb-2 font-semibold">
              What if I need to update my application?
            </h3>
            <p class="sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl">
              You can inform us about any updates or changes, and we will
              promptly revise and submit the updated application to the
              universities as per their requirements.
            </p>
          </div>
          <div class="bg-slate-50 rounded-xl p-6 sm:p-10">
            <h3 class="ext-2xl sm:text-3xl sm:mb-2 font-semibold">
              How secure is my personal information?
            </h3>
            <p class="sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl">
              We have strict security measures in place to protect your personal
              information. Your data is handled with utmost confidentiality and
              stored securely.
            </p>
          </div>
          <div class="bg-slate-50 rounded-xl p-6 sm:p-10">
            <h3 class="ext-2xl sm:text-3xl sm:mb-2 font-semibold">
              Do you offer refunds?
            </h3>
            <p class="sm:leading-relaxed mt-2 sm:mt-2 text-lg sm:text-xl">
              Refund policies may vary, but we ensure transparent pricing and
              refund eligibility will be clearly stated in our terms and
              conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
