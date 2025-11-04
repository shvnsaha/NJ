export async function GET() {

    const data = {
        message: "successfull",
        error: false,
        status: 200
    }
 
  return Response.json({ data })
}