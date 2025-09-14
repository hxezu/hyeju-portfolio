import Banner from "./Banner";
import ProfileInfo from "./ProfileInfo";

export default function Profile({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="bg-white h-screen w-full flex flex-col justify-center items-center gap-10"
    >
      <Banner />
      <ProfileInfo />
    </section>
  );
}
