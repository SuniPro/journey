export function Social() {
  return (
    <div className="absolute z-10 bottom-5 right-6 text-white opacity-40">
      <a
        href="https://www.linkedin.com/in/fabio-ottaviani-82b0776/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block ml-[3px]"
      >
        <svg className="w-[35px] h-[35px] fill-white">
          <use xlinkHref="#ico-linkedin" />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/supahfunk/"
        target="_blank"
        className="inline-block ml-[3px]"
      >
        <svg className="w-[35px] h-[35px] fill-white">
          <use xlinkHref="#ico-instagram" />
        </svg>
      </a>
    </div>
  );
}
