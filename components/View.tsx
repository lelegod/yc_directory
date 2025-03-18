import Ping from "@/components/Ping";
import { formatView } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";

export default async function View({ id }: { id: string}) {
    const post = await client.fetch(STARTUP_VIEWS_QUERY, {id});
    
    return (
        <div className="view-container">
            <div className="absolute -top-2 -right-2">
                <Ping />
            </div>

            <p className="view-text">
                {formatView(post.views)}
            </p>
        </div>
    )
}