const FooterContent = ` <div
  class="bg-[#E2F3FF80] bg-opacity-50 text-black pt-10"
  id="deskFoot"
  ref="{ref}"
>
  <div
    class="grid grid-cols-7 mb-2 pb-[15px] justify-items-center lg:justify-items-start font-radikalLight"
  >
    <div
      class="col-span-7 lg:col-span-2 lg:pl-16 flex flex-col items-center lg:items-start"
    >
      <image
        src="/assets/img/vela-black.svg"
        alt=""
        class="size-24 lg:size-32 -mt-5 lg:pl-2"
      />
      <div class="flex gap-2 mt-4">
        <a
          href="#"
          target="_blank"
          aria-label="facebook"
          class="border border-[#333333] rounded-full p-2"
        >
          <image
            src="/assets/img/socials/fb.svg"
            alt=""
            class="w-4 h-4"
          />
        </a>
        <a
          href="#"
          target="_blank"
          aria-label="twitter"
          class="border border-[#333333] rounded-full p-2"
        >
          <image
            src="assets/img/socials/twitter.svg"
            alt=""
            class="w-4 h-4"
          />
        </a>
        <a
          href="#"
          target="_blank"
          aria-label="instagram"
          class="border border-[#333333] rounded-full p-2"
        >
          <image
            src="assets/img/socials/insta.svg"
            alt=""
            class="w-4 h-4"
          />
        </a>
        <a
          href="#"
          target="_blank"
          aria-label="linkedin"
          class="border border-[#333333] rounded-full p-2"
        >
          <image
            src="assets/img/socials/linkedin.svg"
            alt=""
            class="w-4 h-4"
          />
        </a>
      </div>
    </div>
    <div
      class="col-span-3 lg:col-span-1 mt-10 lg:mt-0 text-sm ml-[60px] lg:ml-0"
    >
      <p class="text-[#8e8e8e]">Pages</p>
      <ul class="flex flex-col gap-1.5 lg:gap-1 mt-1">
        <li>
          <a href="./index.html">Home</a>
        </li>
        <li>
          <a href="#">Residences</a>
        </li>
        <li>
          <a href="#">Partners</a>
        </li>
        <li>
          <a href="#">Amenities</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
      </ul>
    </div>
    <div
      class="col-span-3 lg:col-span-1 mt-10 lg:mt-0 text-sm ml-[50px] lg:ml-0"
    >
      <p class="text-[#8e8e8e]">Location</p>
      <ul class="flex flex-col gap-1 mt-1">
        <li>
          <a href="#">Marasi Drive</a>
        </li>
      </ul>
      <p class="text-[#8e8e8e] mt-2 lg:mt-[20px]">Developer</p>
      <ul class="flex flex-col gap-1 mt-1">
        <li>
          <a href="#" target="_blank"> OMNIYAT </a>
        </li>
      </ul>
      <div class="lg:hidden text-sm mt-2">
        <p class="text-[#8e8e8e]">Support</p>
        <ul class="flex flex-col gap-1 mt-1">
          <li class="cursor-pointer" onClick="openForm('privateMeeting')">Contact Us</li>
        </ul>
      </div>
    </div>
    <div class="col-span-3 lg:col-span-1 hidden lg:block text-sm">
      <p class="text-[#8e8e8e]">Support</p>
      <ul class="flex flex-col gap-1 mt-1">
        <li class="cursor-pointer" onClick="openForm('privateMeeting')">Contact Us</li>
      </ul>
    </div>
    <div
      class="col-span-7 lg:col-span-2 mt-8 lg:mt-0 pt-2 text-sm flex flex-col items-center lg:items-start"
    >
      <a href="#" target="_blank">
        <image
          src="/assets/img/omniyat-full.svg"
          alt=""
          class="h-[45px]"
        />
      </a>
      <button
        onClick="openForm('privateMeeting')"
        class="font-semibold tracking-widest text-[10px] lg:text-[14px] uppercase lg:w-[220px] h-[40px] border border-[#65799B] bg-[#65799B] text-white w-[140px] mt-5"
      >
        Contact Us
      </button>
      <p class="mt-4 text-center lg:text-left">
        By signing up, I agree to receive OMNIYAT’s <br />
        latest news and updates in accordance <br />
        with their data protection policy.
      </p>
    </div>
  </div>

  <div class="border-t border-black border-opacity-5 pt-6 pb-8">
    <div
      class="grid grid-cols-7 justify-items-center lg:justify-items-start gap-y-4"
    >
      <div class="lg:pl-16 text-sm col-span-7 lg:col-span-2 font-radikalLight">
        Vela Viento &copy; 2024
      </div>
      <div class="col-span-7 lg:col-span-3 w-full">
        <ul
          class="flex justify-center lg:justify-start text-sm whitespace-nowrap w-full"
        >
          <li>
            <a
              href="#"
              target="_blank"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div
        class="col-span-7 lg:col-span-2 flex gap-4 text-sm ml-[20px] lg:ml-0"
      >
        <p class="text-[#8e8e8e]">Language</p>
        <select name="" id="languageSelect" class="bg-[#f0f9ff] w-[80px]">
          <option value="en">English</option>
          <option value="gm">German</option>
          <option value="fr">French</option>
          <option value="cn">Chinese</option>
          <option value="ru">Russian</option>
        </select>
      </div>
    </div>
  </div>
</div>`;

class FooterComp extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = FooterContent;

    var languageSelect = document.getElementById("languageSelect");
    languageSelect.onchange = function () {
      var selectedLanguage = this.value;
      if (selectedLanguage == "en") {
        window.location.href = "/";
      } else {
        window.location.href = "/" + selectedLanguage;
      }
    };
  }
}

customElements.define("footer-component", FooterComp);
