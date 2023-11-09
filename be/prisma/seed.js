import { seedData } from '../src/seedData';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.user.create({
            data: {
                name: 'User1',
                email: 'user1@example.com',
                password: 'password1',
                role: 'GURU',
            }
        });

        // await prisma.link.createMany({
        //     data: seedData,
        // });
    } catch (e) {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1); // Exit with code 1 to indicate an error
    } finally {
        await prisma.$disconnect();
    }
}

main();


