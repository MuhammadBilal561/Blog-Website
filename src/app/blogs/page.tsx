import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from '@/components/Header'

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";
import Fotter from '@/components/Fotter'


async function getBlogs (){
const res=await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=50"

)
if (!res.ok){
    throw new Error("Invalid response from server")
}
return await res.json()
};





async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="">
    <div >
        <Header/>
    </div>
    <div className="p-10 flex flex-col  justify-evenly mt-16 ml-20">
      {blogs.blogs.length > 0 ? (
        <div className="flex gap-5 flex-wrap">
          {blogs.blogs.map((post: any) => (
            <Link href={`/blogs/${post.id}`} key={post.id}>
              <Card>
                <CardContent className="max-w-xs flex flex-col gap-1 p-4">
                  <Image
                    src={post.photo_url}
                    alt={post.title}
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                  <div className="flex justify-between items-center">
                    <Badge variant="default" className="capitalize">
                      {post.category}
                    </Badge>
                    <p className="font-bold " >
                      Posted:{dayjs(post.created_at).format("DD-MMMM-YY")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div>No Blog Found</div>
      )}
    </div>
    <div className='flex justify-end   mr-10 mb-4 '>
  <Fotter />
</div>
    </div>
  );
}

export default BlogsPage;