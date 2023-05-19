import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";

export const getProjects = async (): Promise<Project[]> => {
  const client = createClient({
    projectId: "4e7mvi1j",
    dataset: "production",
    apiVersion: "2023-05-18",
  });

  return client.fetch(
    groq`*[_type=="project"]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image":image.asset->url,
        url,
        content
    }`
  );
};
