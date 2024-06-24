import { delete_hotel_subscription } from "./logic";

export async function DELETE(request: Request) {
	try {
		const data = await request.json();
		const result = await delete_hotel_subscription(data);
		return Response.json(
			{
				returncode: result.returncode,
				message: result.message,
				output: result.output
			},
			{
				status: result.returncode
			}
		);
	}
	catch (error: any) {
		return Response.json(
			{
				returncode: 500,
				message: `Error Deleting Hotel's Subscription: ${error.message}`,
				output: []
			},
			{
				status: 500
			}
		);
	}
}

