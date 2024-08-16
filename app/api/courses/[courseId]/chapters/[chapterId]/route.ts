import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const { isPublished, ...values } = await req.json();

    const { userId } = auth();
    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const ownerCourse = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
    });

    if (!ownerCourse) return new NextResponse("Unauthorized", { status: 401 });

    const chapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        ...values,
      },
    });

    // HANDLE VIDEO UPLOAD

    return NextResponse.json(chapter);
  } catch (error) {
    console.log("[COUSES_CHAPTER_ID]", error);
    return new NextResponse("Internal Erro", { status: 500 });
  }
}
