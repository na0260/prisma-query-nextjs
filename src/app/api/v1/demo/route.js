import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function GET(req, res) {

}

export async function POST(req, res) {
    // Create One
    /*try {
        const prisma = new PrismaClient();
        const data = await req.json();

        const result = await prisma.Employee.create({
            data: data
        });

        return NextResponse.json({status: "Success", data: result});

    }catch (e) {
        return NextResponse.json({status: "Failed", data: e});
    }*/
}