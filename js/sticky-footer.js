const stickyFooterContent = ` <div class="shadow-md">
  <div
    id="footer"
    class="fixed bottom-[-65px] left-0 flex justify-between items-center h-[50px] lg:h-[55px] px-5 lg:px-32 bg-[#65799B] w-full z-[50] drop-shadow-lg"
  >
    <div class="flex justify-between lg:w-full">
      <div class="flex items-center gap-10">
        <img
          src="/assets/img/vela-white.svg"
          alt=""
          class="w-[40px] lg:w-[50px]"
        />
      </div>
    </div>
    <button
      id="registerInterestCta1"
      onclick="openForm('privateMeeting')"
      class="absolute lg:hidden left-1/2 -translate-x-1/2 h-[35px] top-1/2 -translate-y-1/2 buttonItem w-[140px] text-white border-white"
    >
      REGISTER INTEREST
    </button>

    <div class="flex items-center gap-4 lg:gap-8">
      <div class="hidden lg:flex gap-4 gap-y-2">
        <button
          id="registerInterestCta2"
          onclick="openForm('privateMeeting')"
          class="buttonItem h-[35px] text-xs w-[190px] text-white border-white"
        >
          REGISTER INTEREST
        </button>

        <button
          id="brochureBtn"
          onclick="openForm('brochure')"
          class="buttonItem h-[35px] text-xs w-[190px] text-white border-white"
        >
          DOWNLOAD brochure
        </button>
      </div>

      <div class="flex items-center gap-3 lg:gap-10 text-white">
        <a
          href="https://api.whatsapp.com/send?phone=971544886666&text=Hello,%20I%20am%20interested%20in%20the%20Vella%20Viento%20Property"
          target="_blank"
        >
          <div class="flex items-center gap-1">
            <img src="/assets/img/wp.svg" alt="" class="h-7 lg:h-6" />
            <span class="uppercase text-xs hidden lg:block">Whatsapp</span>
          </div></a
        >
        <a href="tel:+971 54 488 6666"  target="_blank">
          <div class="flex items-center gap-1">
            <img src="/assets/img/call.png" alt="" class="h-5 w-5 lg:h-5" />
            <span class="uppercase text-xs hidden lg:block">Call</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>`;

class StickyFooterComp extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = stickyFooterContent;
  }
}

customElements.define("sticky-footer-component", StickyFooterComp);
