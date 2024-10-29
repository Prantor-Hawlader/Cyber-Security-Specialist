"use server";

import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";

import { uploadImage } from "./uploadImage";

import { getSession } from "@/lib/session";
import prisma from "@/db/prisma";

export async function createBlog(formData: FormData) {
  const session = await getSession();

  if (!session) return;

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const imageFile = formData.get("image") as File | null;

  let url: string | undefined;

  if (imageFile && imageFile.size > 0) {
    const preset = "collectionerImage" as string;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    url = await uploadImage(imageFile, preset);
  }
  const collectionData: Prisma.BlogCreateInput = {
    title,
    description,
    image: url,
  };

  try {
    await prisma.blog.create({
      data: collectionData,
    });

    return { status: "success" };
  } catch (error) {
    console.log(error, "error vai");

    return { error: "Failed to create blog" };
  } finally {
    revalidatePath("/blog");
    redirect("/blog");
  }
}
export async function editBlog(formData: FormData, id: string) {
  const session = await getSession();

  if (!session) return;

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const imageFile = formData.get("image") as File | null;

  let url: string | undefined;

  if (imageFile && imageFile.size > 0) {
    const preset = "collectionerImage" as string;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    url = await uploadImage(imageFile, preset);
  }
  const collectionData: Prisma.BlogCreateInput = {
    title,
    description,
    image: url,
  };

  try {
    await prisma.blog.update({
      where: { id },
      data: collectionData,
    });

    return { status: "success" };
  } catch (error) {
    console.log(error, "error vai");

    return { error: "Failed to edit blog" };
  } finally {
    revalidatePath("/blog");
    redirect("/blog");
  }
}

export async function deleteBlog(id: string) {
  try {
    await prisma.blog.delete({
      where: { id },
    });

    return { status: "success" };
  } catch (error) {
    return { error: "Failed to delete blog" };
  } finally {
    revalidatePath(`/blog`);
    redirect("/blog");
  }
}
