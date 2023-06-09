import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <h1 className="text-7xl font-extrabold">hello</h1>
      <p className="mt-3 text-xl text-gray-600">check out my projects</p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        My Projectsssss
      </h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <Link
            key={project._id}
            className="border border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
            href={`/projects/${project.slug}`}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold">{project.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
