import db from '@/modules/db';
import { Quest } from '@prisma/client';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (id) {
        const res: Quest | null = await db.quest.findUnique({
            where: {
                id: +id,
            },
        });
        return Response.json(res);
    }
    const type = searchParams.get('type');

    if (type) {
        const res: Quest[] = await db.quest.findMany({
            where: {
                type,
            },
        });

        return Response.json(res);
    }
    const res: Quest[] = await db.quest.findMany();

    return Response.json(res);
}
