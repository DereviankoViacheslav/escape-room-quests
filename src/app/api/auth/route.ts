import db from '@/modules/db';
import { User } from '@prisma/client';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    if (!email) {
        return Response.json(null);
    }
    const res: User | null = await db.user.findUnique({
        where: {
            email: email,
        },
    });

    return Response.json(res);
}

export async function POST(request: Request) {
    const res = await request.json();

    const user: User | null = await db.user.create({
        data: {
            ...res,
        },
    });

    return Response.json(user);
}
