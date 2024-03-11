// import Image from "next/image";

// const ProjectCard = () => {
//   return (
//     <div className="flex flex-col justify-center">
//       <div className="">
//         <Image
//           src="/picture.jpg"
//           alt="pic"
//           width={200}
//           height={100}
//           className="card p-2 object-cover bg-center border rounded-xl"
//         />
//       </div>
//       <h1 className="">Title</h1>
//       <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
//     </div>
//   );
// };

// export default ProjectCard;

import Image from "next/image";

const ProjectCard = ({ imageUrl, title, description }) => {
  return (
    <div className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg p-2 border border-2"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
