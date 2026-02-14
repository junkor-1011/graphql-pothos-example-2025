import { context, trace } from "@opentelemetry/api";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { NodeSDK } from "@opentelemetry/sdk-node";

export const otelSdk = new NodeSDK({
	instrumentations: [getNodeAutoInstrumentations()],
});

export function startOtel() {
	otelSdk.start();
}

export function getTraceId(): string | undefined {
	const span = trace.getSpan(context.active());
	return span?.spanContext().traceId;
}

export function getSpanId(): string | undefined {
	const span = trace.getSpan(context.active());
	return span?.spanContext().spanId;
}

export function getTraceContext() {
	const span = trace.getSpan(context.active());
	const spanContext = span?.spanContext();
	return spanContext
		? { traceId: spanContext.traceId, spanId: spanContext.spanId }
		: undefined;
}
