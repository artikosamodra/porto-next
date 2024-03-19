import ExpertiseCard from "@/app/component/Utilities/ExpertiseCard";
import TitlePage from "@/app/component/Utilities/TitlePage";

const MyExpertise = () => {
  return (
    <section className="px-40 py-10">
      <TitlePage titlePage="My Expertise" />
      <div className="grid grid-cols-4 gap-4">
        <ExpertiseCard
          iconTech="/img/skill/html.png"
          nameTech="HTML"
          descTech="HTML is a markup language for creating structured and formatted web page content and structure."
        />
        <ExpertiseCard
          iconTech="/img/skill/css.png"
          nameTech="CSS"
          descTech="CSS controls the appearance of web pages by styling, coloring, laying out, and formatting HTML elements."
        />
        <ExpertiseCard
          iconTech="/img/skill/javascript.png"
          nameTech="JavaScript"
          descTech="JavaScript adds interactivity and dynamic behavior to web pages by manipulating HTML and reacting to user actions."
        />
        <ExpertiseCard
          iconTech="/img/skill/tailwind.png"
          nameTech="Tailwind"
          descTech="Tailwind is a utility-first CSS framework that streamlines web development by providing pre-built, customizable classes."
        />
        <ExpertiseCard
          iconTech="/img/skill/react.png"
          nameTech="React"
          descTech="React is a JavaScript library for building user interfaces, emphasizing component-based architecture and efficient rendering"
        />
        <ExpertiseCard
          iconTech="/img/skill/next.png"
          nameTech="NextJS"
          descTech="Next.js is a React framework for building server-side rendered and statically generated web applications with ease."
        />
        <ExpertiseCard
          iconTech="/img/skill/node.png"
          nameTech="NodeJS"
          descTech="Node.js is a JavaScript runtime environment that allows running server-side JavaScript applications outside of a web browser."
        />
        <ExpertiseCard
          iconTech="/img/skill/express.png"
          nameTech="ExpressJS"
          descTech="Express is a minimalist and flexible Node.js web application framework that simplifies building robust APIs and web servers."
        />
        <ExpertiseCard
          iconTech="/img/skill/aws.png"
          nameTech="AWS"
          descTech="AWS (Amazon Web Services) is a cloud computing platform providing a wide range of services for building scalable applications."
        />
        <ExpertiseCard
          iconTech="/img/skill/boostrap.png"
          nameTech="Boostrap"
          descTech="Bootstrap is a popular front-end framework for developing responsive and mobile-first websites with pre-built CSS and JavaScript components."
        />
        <ExpertiseCard
          iconTech="/img/skill/git.png"
          nameTech="Git"
          descTech="Git is a distributed version control system for tracking changes in source code during software development collaboratively."
        />
        <ExpertiseCard
          iconTech="/img/skill/Unity.png"
          nameTech="Unity 3D"
          descTech="Unity is a cross-platform game engine used for developing interactive 2D and 3D experiences for various devices."
        />
        <ExpertiseCard
          iconTech="/img/skill/mysql.png"
          nameTech="MySQL"
          descTech="MySQL is an open-source relational database management system for storing and managing structured data efficiently."
        />
        <ExpertiseCard
          iconTech="/img/skill/csharp.png"
          nameTech="C#"
          descTech="C# is a powerful, object-oriented programming language developed by Microsoft for building a variety of applications."
        />
        <ExpertiseCard
          iconTech="/img/skill/kotlin.png"
          nameTech="Kotlin"
          descTech="Kotlin is a modern, statically-typed programming language for developing Android apps, web applications, and server-side development."
        />
        <ExpertiseCard
          iconTech="/img/skill/php.png"
          nameTech="PHP"
          descTech="PHP is a server-side scripting language used for web development to create dynamic and interactive websites."
        />
      </div>
    </section>
  );
};

export default MyExpertise;
