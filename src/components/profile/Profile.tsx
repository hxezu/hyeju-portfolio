import Banner from "./Banner";
import LiveViewers from "./LiveViewers";
import ProfileInfo from "./ProfileInfo";

export default function Profile({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`${className} bg-white h-screen w-full flex flex-col justify-center items-center gap-10`}
    >
      <LiveViewers />
      <Banner />
      <ProfileInfo />
    </section>
  );
}
