import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex justify-center items-center">
      <Image
        src="https://blog.hubspot.com/hs-fs/hubfs/7a8f8d634013568124e130728834d47a.gif?width=1500&name=7a8f8d634013568124e130728834d47a.gif"
        alt="Loader"
        width={500}
        height={500}
        className=""
      />
    </div>
  );
}
