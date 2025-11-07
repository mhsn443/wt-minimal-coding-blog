import Image from "next/image";

export default function Avatar() {
  return (
    <div className="flex -space-x-1.5">
      <Image
        className="custom-rounded-full ring-background ring-1"
        src="/wt-minimal-coding-blog/avatar-01.webp"
        width={20}
        height={20}
        alt="Avatar 01"
      />
      <Image
        className="custom-rounded-full ring-background ring-1"
        src="/wt-minimal-coding-blog/avatar-02.webp"
        width={20}
        height={20}
        alt="Avatar 02"
      />
      <Image
        className="custom-rounded-full ring-background ring-1"
        src="/wt-minimal-coding-blog/avatar-03.webp"
        width={20}
        height={20}
        alt="Avatar 03"
      />
      <Image
        className="custom-rounded-full ring-background ring-1"
        src="/wt-minimal-coding-blog/avatar-04.webp"
        width={20}
        height={20}
        alt="Avatar 04"
      />
    </div>
  );
}
