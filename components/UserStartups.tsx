import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import StartupCard, { StartupTypeCard } from "./StartupCard";

export default async function UserStartups({ id }: { id: string }) {
    const posts = await client.withConfig({ useCdn: false}).fetch(STARTUPS_BY_AUTHOR_QUERY, {id});
    console.log(id, posts);

    return (
        <>
            { posts?.length > 0 ? (
                posts.map((post: StartupTypeCard) => (
                    <StartupCard key={post?._id} post={post} />
                ))
            ) :
                <p className="no-result">No Post Yet</p>
            }
        </>
    )
}