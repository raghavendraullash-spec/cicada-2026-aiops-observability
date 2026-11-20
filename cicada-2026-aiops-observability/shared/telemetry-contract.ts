export type HealthState = 'Excellent' | 'Good' | 'Fair' | 'Poor';

export interface TelemetryMetrics {
  cpu_pct: number;
  mem_pct: number;
  disk_pct: number;
  bandwidth_mbps: number;
  latency_ms: number;
  packet_loss_pct: number;
  service_up: boolean;
}

export interface SecuritySummary {
  repeated_auth_failures: number;
  suspicious_events: number;
  raw_data_retained_locally: boolean;
}

export interface AllowListedMetadataPayload {
  payload_id: string;
  tenant_id: string;
  region: string;
  source_id: string;
  event_timestamp_utc: string;
  source_tz: string;
  category: string;
  severity: string;
  summary: string;
  health_state: HealthState;
  metrics: TelemetryMetrics;
  security_summary: SecuritySummary;
}

export interface RawTelemetryEvent {
  raw_id: string;
  tenant_id: string;
  host_name: string;
  event_timestamp_utc: string;
  source_tz: string;
  metrics: TelemetryMetrics;
  raw_log_line: string;
  auth_failure_count: number;
  secret_leak_sample?: string;
}