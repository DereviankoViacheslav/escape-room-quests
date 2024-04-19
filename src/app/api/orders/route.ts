import db from '@/modules/db';
import { Order } from '@prisma/client';

export async function POST(request: Request) {
    const res = await request.json();

    const order: Order | null = await db.order.create({
        data: {
            ...res,
        },
    });

    return Response.json(order);
}
