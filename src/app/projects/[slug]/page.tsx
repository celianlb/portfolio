import { sanityClient } from "@/app/sanity";
import { Projects } from "../../../../typing";
import OneProject from "./OneProject";
import { groq } from "next-sanity";

async function getProject(slug: string) {
const query = groq`*[_type == "projects" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    category,
    type,
    description,
    image,
    link,
    linkGitHub,
    techno[]-> {
        title,
        image,
    }
}`;
  const project = await sanityClient.fetch(
    query, { slug }
  );
  return project;
}

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);
  return (
    <div>
      <OneProject project={project} />
    </div>
  );
}
