import Image from "next/image";

type Props = {
  src?: string;
  alt?: string;
  ratio?: "4-5" | "4-3";
  objectPosition?: string;
  placeholder?: string;
  corner?: string;
};

export function PortraitSlot({
  src,
  alt = "",
  ratio = "4-5",
  objectPosition = "50% 50%",
  placeholder = "Portrait",
  corner = "image",
}: Props) {
  return (
    <div className={`slot-frame slot-frame--${ratio}${src ? " slot-frame--filled" : ""}`}>
      {!src && (
        <>
          <div className="slot-frame__label">{placeholder}</div>
          <div className="slot-frame__tick" />
          <div className="slot-frame__corner">[ {corner} ]</div>
        </>
      )}
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 880px) 100vw, 40vw"
          style={{ objectFit: "cover", objectPosition }}
        />
      )}
    </div>
  );
}
