import db from '@/lib/db';
import { hotel_subscription_add } from '@/schemas/Subscriptions/HotelSubscriptions/add';
import { HotelSubscriptionResponse } from '@/types/HotelSubscriptionResponse';
import HotelSubscription from '@/model/HotelSubscription';
import { ZodError } from 'zod';

export async function add_hotel_subscription(data: any): Promise<HotelSubscriptionResponse> {
	try {

		const hotel_id: string | null = data['hotel_id'];
		const subscription_id: string | null = data['subscription_id'];
		const is_valid: boolean | null = data['is_valid'];
		const start_date: string | null = data['start_date'];
		const end_date: string | null = data['end_date'];

		// Default Invalid Checker
		if (hotel_id == null || subscription_id == null || is_valid == null || start_date == null || end_date == null ) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		//Zod Input Checker
		try {
			var Schema = hotel_subscription_add.parse(data);
			Schema
		} catch (error: ZodError | any) {
			try {
				const err = JSON.parse(error.message);
				let error_message = '';
				await (err as any).forEach((obj: any) => {
					error_message = obj.message;
				});

				return {
					returncode: 400,
					message: error_message,
					output: []
				};


			} catch (error: any) {
				return {
					returncode: 400,
					message: error.message,
					output: []
				};

			}
		}

		// Inserting the Subscription Data
		const result: HotelSubscription[] = await db.hotel_Subscription.create({
			data: {
				HotelId: hotel_id,
				SubscriptionId: subscription_id,
				isValid: is_valid,
				StartDate: start_date,
				EndDate: end_date
			},
		});

		db.$disconnect();

		return {
			returncode: 200,
			message: "Subscription Added",
			output: result
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
