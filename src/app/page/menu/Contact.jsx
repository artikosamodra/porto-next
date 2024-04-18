import TitlePage from "@/app/component/Utilities/TitlePage";
import Message from "../Contact/Message";
import SocialMedia from "../Contact/SocialMedia";

const Contact = () => {
  return (
    <section className="py-40 lg:px-40 px-10 bg-gradient-to-t from-gray-400">
      <TitlePage
        titlePage1="CONTACT"
        embedLottie="https://lottie.host/a2fd473b-892c-43b9-9399-7143c7ac55bd/bL8vBf3Z5x.json"
      />

      <h1 className="text-3xl">Let's discuss your projects.</h1>
      <p className="py-4">
        Please fill out the form and submit your inquiries, I will respond as
        soon as possible. Alternatively, if you prefer, you can reach out to me
        via my email address.
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 pt-8 gap-20">
        <Message />

        <div>
          <h1 className="text-xl font-semibold">Follow My Social Media</h1>
          <SocialMedia />
        </div>
      </div>
    </section>
  );
};

export default Contact;
