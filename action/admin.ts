"use server";

import { redirect } from "next/navigation";

import { signIn } from "@/auth";
import prisma from "@/db/prisma";

export const login = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const user = await prisma.admin.findUnique({ where: { email } });

  if (!user) {
    return { error: "User not found" };
  }

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
  } catch (error) {
    return { error: "Failed to login" };
  }
  redirect("/blog");
};
