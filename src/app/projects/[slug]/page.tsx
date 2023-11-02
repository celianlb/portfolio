import { sanityClient } from "@/app/sanity";
import { Projects } from "../../../../typing";
import OneProject from "./OneProject";
import { groq } from "next-sanity";
import Header from "@/components/Header";
import { Metadata } from "next";
import { get, param } from "jquery";

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
// j'aimerais crée une métadata avec un titre dynamique en fonction du projet
export const metadata: Metadata = {
  title: "Project",
  description: "One Project",
};

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);
  return (
    <main>
      <Header />
      <OneProject project={project} />
    </main>
  );
}
