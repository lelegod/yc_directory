import { Button } from "@/components/ui/button";
import { Author, Startup } from "@/sanity/types";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn, formatDate } from "../lib/utils";
import { Skeleton } from "./ui/skeleton";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

export default function StartupCard({ post }: { post: StartupTypeCard }) {
    const { _createdAt, views, author, title, category, _id, description, image} = post;

    return (
        <li className="group startup-card">
            <div className="flex-between">
                <p className="startup-card_date">
                    {formatDate(_createdAt)}
                </p>
                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary"/>
                    <span className="text-16-medium">{views}</span>
                </div>
            </div>

            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${author?._id}`}>
                        <p className="text-16-medium line-clamp-1">
                            {author?.name}
                        </p>
                    </Link>
                    <Link href={`startup/${_id}`}>
                        <h3 className="text-26-semibold line-clamp-1">
                            {title}
                        </h3>
                    </Link>
                </div>
                <Link href={`/user/${author?._id}`}>
                    <Image src={ author?.image || "https://placehold.co/48x48" } alt="placeholder" width={48} height={48} className="rounded-full"/>
                </Link>
            </div>

            <Link href={`/startup/${_id}`}>
                <p className="startup-card_desc">
                    {description}
                </p>
                <img src={image} alt="placeholder" className="startup-card_img"/>
            </Link>

            <div className="flex-between mt-5 gap-3">
                <Link href={`/?query=${category?.toLowerCase()}`}>
                    <p className="text-16-medium">
                        {category}
                    </p>
                </Link>
                <Button className="startup-card_btn">
                    <Link href={`/startup/${_id}`}>
                        Details
                    </Link>
                </Button>
            </div>
        </li>
    )
}

export const StartupCardSkeleton = () => {
    return (
        <>
            {[0, 1, 2, 3].map((index: number) => (
                <li key={cn("skeleton", index)}>
                    <Skeleton className="startup-card_skeleton"/>
                </li>
            ))}
        </>
    );
}