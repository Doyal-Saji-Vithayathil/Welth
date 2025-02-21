import { inngest } from "@/lib/inngest/client";
import {
  checkBudgetAlert,
  generateMonthlyReports,
  processRecurringTransaction,
  triggerRecurringTransaction,
} from "@/lib/inngest/functions";

import { serve } from "inngest/next";

//create an API that serves zero function
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    checkBudgetAlert,
    triggerRecurringTransaction,
    processRecurringTransaction,
    generateMonthlyReports,
  ], 
});
