import { GetStaticPathsContext, GetStaticPropsContext, NextPage } from "next";
import { readdir } from "fs/promises";
import { useRouter } from "next/router";

const Episode: NextPage = () => {
  const router = useRouter();

  router.asPath

  return <div>Henlo</div>
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const fileName = context.params?.slug
  const path = `${process.cwd()}/content/${fileName}.json`
  

  return {
    props: {}
  }
}

export async function getStaticPaths(context: GetStaticPathsContext) {
  const path = `${process.cwd()}/content`
  const files = await readdir(path).then(res => {
    return res
  }).catch((error) => {
    return []
  })
  return {
    paths: files.map(file => ({ params: { slug: file.split(".")[0] } })),
    fallback: false
  }
}

export default Episode