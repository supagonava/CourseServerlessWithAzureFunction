import { app, InvocationContext, Timer } from "@azure/functions";

export async function MyFirstTimmerFunction(myTimer: Timer, context: InvocationContext): Promise<void> {
    context.log('Timer function processed request.');
}

app.timer('MyFirstTimmerFunction', {
    schedule: '0 */5 * * * *',
    handler: MyFirstTimmerFunction
});
