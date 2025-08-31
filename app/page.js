export const dynamic = "force-dynamic";   // ⬅️ This makes page always dynamic

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificate";

// Fetch profile data
async function getProfileData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(`${apiUrl}/profile`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
}

export default async function HomePage() {
  const profileData = await getProfileData();

  if (!profileData) {
    return (
      <main className="container mx-auto p-4 text-center">
        <h1 className="text-2xl text-red-500">Failed to load portfolio data.</h1>
        <p>Please make sure the backend server is running on localhost:5001.</p>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="container mx-auto px-4">
        <Hero name={profileData.name} bio={profileData.bio} />
      </div>

      {/* ✅ About Section */}
      <section id="about">
        <About bio={profileData.bio} links={profileData.links} email={profileData.email} />
      </section>

      {/* ✅ Skills + Projects */}
      <div className="container mx-auto px-4">
        <section id="skills">
          <Skills skills={profileData.skills} />
        </section>

        <section id="projects">
          <Projects projects={profileData.projects} />
        </section>
      </div>

      {/* ✅ Education */}
      <section id="education">
        <Education education={profileData.education} />
      </section>

      {/* ✅ Certificates */}
      <section id="certificates">
        <Certificates certificates={profileData.certificates} />
      </section>

      <Footer />
    </main>
  );
}
