// app/actions/program.ts
"use server";

import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

import { uploadImage } from "./uploadImage";

import prisma from "@/db/prisma";

export async function createProgram(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const summary = formData.get("summary") as string;
    const link = formData.get("link") as string;
    const tag = formData.get("tag") as string;
    const inScope = formData.getAll("inScope") as string[];
    const outScope = formData.getAll("outScope") as string[];
    const rewards = formData.getAll("rewards") as string[];
    const imageFile = formData.get("image") as File | null;
    const reference = formData.get("reference") as string;

    let url: string | undefined;

    if (imageFile && imageFile.size > 0) {
      const preset = "collectionerImage" as string;

      url = await uploadImage(imageFile, preset);
    }

    const programData: Prisma.ProgramCreateInput = {
      name,
      summary,
      link,
      tag,
      inScope,
      outScope,
      rewards,
      reference,
      image: url,
    };

    await prisma.program.create({
      data: programData,
    });

    // Revalidate the cache for the programs page
    revalidatePath("/programs");

    return { status: "success" };
  } catch (error) {
    console.error("Error creating program:", error);

    return { error: "Failed to create program" };
  }
}

export async function DeleteProgram(id: string) {
  try {
    await prisma.program.delete({
      where: { id },
    });

    return { status: "success" };
  } catch (error) {
    return { error: "Failed to delete program" };
  } finally {
    revalidatePath(`/programs`);
  }
}
