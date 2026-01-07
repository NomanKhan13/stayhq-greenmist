import { auth } from "../_lib/auth";
import { getGuestById } from "../_lib/users";
import { PersonalInformation } from "../_components/profile-information";

export default async function Account() {
  // // Mock user data
  // const user = {
  //   name: "Sarah Mitchell",
  //   email: "sarah@example.com",
  //   phone: "+1 (555) 123-4567",
  //   memberSince: "January 2023",
  //   preferences: {
  //     newsletter: true,
  //     notifications: true,
  //   },
  // };
  const session = await auth();

  const user = session?.user;
  const guest = await getGuestById(user?.guest);
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name");
  const countries = await res.json();
  const countriesReqFields = countries.map((c) => ({
    label: c.name.common,
    value: c.name.common,
  }));

  return (
    <section id="profile" className="space-y-8">
      <div>
        <h2 className="text-2xl mb-6">Profile Information</h2>
        <PersonalInformation guest={guest} countries={countriesReqFields} />
      </div>
    </section>
  );
}
