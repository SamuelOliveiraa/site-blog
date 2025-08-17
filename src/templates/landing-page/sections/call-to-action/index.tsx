import ButtonSection from "../../../../components/button";

export default function CallToAction() {
  return (
    <section className="py-24 mt-10 bg-gradient-to-b from-cyan-950/20 to-gray-700 relative">
      <div className="absolute inset-0 bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="container relative">
        <div className="container flex flex-col items-center gap-6 text-center ">
          <h2 className="text-gray-100 text-center text-heading-xl text-balance max-w-xl">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>
          <ButtonSection />
        </div>
      </div>
    </section>
  );
}
