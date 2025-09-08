import Banner from "./Banner";
import ProfileInfo from "./ProfileInfo";

export default function Profile() {
  return (
    <section className="bg-white h-screen w-full flex flex-col justify-center items-center gap-10">
      <Banner />
      <ProfileInfo />
    </section>
  );
}
