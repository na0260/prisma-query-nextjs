import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export async function GET(req, res) {
    // Aggregate
    /*try {
        const prisma = new PrismaClient();
        const result = await prisma.Employee.aggregate({
            _sum:{
                salary:true
            },
            _avg:{
                salary:true
            },
            _min:{
                salary:true
            },
            _max:{
                salary:true
            },
            _count:true
        });

        return NextResponse.json({status: "Success", data: result});
    }catch (e) {
        return NextResponse.json({status: "Failed", data: e});
    }*/
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
    // Create Many
    /*try {
        const prisma = new PrismaClient();
        const data = await req.json();

        const result = await prisma.Employee.createMany({
            data: data
        });

        return NextResponse.json({status: "Success", data: result});
    }catch (e) {
        return NextResponse.json({status: "Failed", data: e});
    }*/
    // Relational Create
    /*try {
        const prisma = new PrismaClient();
        const result = await prisma.User.create({
            data:{
                email:"user1@mail.com",
                password:"password",
                profile:{
                    create:{
                        firstName:"User",
                        lastName:"One",
                        mobile:"1234567890",
                        city:"City",
                    }
                },
                post:{
                    create:{
                        title:"User Post Title",
                        description:"User Post Description",
                    }
                }
            }
        });

        return NextResponse.json({status: "Success", data: result});
    }catch (e) {
        return NextResponse.json({status: "Failed", data: e});
    }*/
    // Relational find
    /*try{
        const prisma = new PrismaClient();
        const result = await prisma.User.findMany({
            include:{
                profile:true,
                post:true
            }
        });

        return NextResponse.json({status: "Success", data: result});

    }catch (e) {
        return NextResponse.json({status: "Failed", data: e});
    }*/
}