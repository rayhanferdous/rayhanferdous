import Hero from "@/components/Hero/Hero";
import Container from "@/components/Layouts/Container";
import Header from "@/components/Layouts/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div>
        <Container>
          <div className="flex justify-between">
            <div className="w-full">
              <div className="flex flex-col justify-center py-20 space-y-4">
                <h1 className="text-white">Experiance</h1>
                <p className="text-4xl font-bold text-blue-500"></p>
                <p className="text-xl text-white"></p>
                <button className="px-8 py-2 text-white bg-blue-500 rounded-md">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
