export async function GET() {
    return Response.json({
        message: "Привет от Next!",
        server: process.env.INSTANCE_NAME || "local",
        time: new Date().toISOString(),
    }
    );
}