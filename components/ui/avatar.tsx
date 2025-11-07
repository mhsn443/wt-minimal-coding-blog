export default function Avatar() {
  return (
    <div className="flex -space-x-1.5">
      <img
        className="custom-rounded-full ring-background ring-1"
        src="./avatar-01.webp"
        width={20}
        height={20}
        alt="Avatar 01"
        loading="lazy"
        decoding="async"
      />
      <img
        className="custom-rounded-full ring-background ring-1"
        src="./avatar-02.webp"
        width={20}
        height={20}
        alt="Avatar 02"
        loading="lazy"
        decoding="async"
      />
      <img
        className="custom-rounded-full ring-background ring-1"
        src="./avatar-03.webp"
        width={20}
        height={20}
        alt="Avatar 03"
        loading="lazy"
        decoding="async"
      />
      <img
        className="custom-rounded-full ring-background ring-1"
        src="./avatar-04.webp"
        width={20}
        height={20}
        alt="Avatar 04"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
