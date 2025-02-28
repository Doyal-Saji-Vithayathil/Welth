export const runtime = "nodejs";
// app/api/test-recurring-transactions/route.js
import { db } from "@/lib/prisma"; // Ensure that the Prisma client is set up

export async function GET(req) {
  try {
    // Fetch all recurring transactions marked as COMPLETED
    const recurringTransactions = await db.transaction.findMany({
      where: {
        isRecurring: true,
        status: "COMPLETED",
      },
    });

    // Respond with the found transactions
    return new Response(JSON.stringify({ recurringTransactions }), {
      status: 200,
    });
  } catch (error) {
    console.error("Failed to fetch recurring transactions:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch transactions" }), {
      status: 500,
    });
  }
}
