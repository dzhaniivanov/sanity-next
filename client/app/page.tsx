import { getProjects } from "@/sanity/sanity-utils";
import { Project } from "@/types/project";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">hello</h1>
      <p className="mt-3 text-xl text-gray-600">check out my projects</p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-3" >
        {projects.map((project) => (
          <div key={project._id} className="border border-gray-500 rounded-lg">
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className="object-cover rounded-lg border-gray-500"
              />
            )}
            <div className="font-extrabold">{project.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
