const box = "#E9E5DB";
const sub = "#9EA2AA";
const code = "#B9D98A";
const hot = "#FF8B5E";

export const MicroservicesDiagram = () => (
  <svg
    viewBox="0 0 520 240"
    className="block h-auto w-full max-w-[520px] font-mono"
    role="img"
    aria-label="Client to API gateway, gateway to three Go services over gRPC, services publishing to Kafka, all inside a Kubernetes cluster"
  >
    <rect x="96" y="8" width="416" height="224" rx="6" fill="none" stroke="#4A4E57" strokeDasharray="4 4" />
    <text x="500" y="26" fill={sub} fontSize="11" textAnchor="end">kubernetes</text>
    <rect x="4" y="100" width="64" height="40" rx="4" fill="none" stroke={box} />
    <text x="36" y="124" fill={box} fontSize="12" textAnchor="middle">client</text>
    <line x1="68" y1="120" x2="120" y2="120" stroke={box} />
    <rect x="120" y="96" width="96" height="48" rx="4" fill={hot} />
    <text x="168" y="118" fill="#15171C" fontSize="12" textAnchor="middle">api</text>
    <text x="168" y="133" fill="#15171C" fontSize="12" textAnchor="middle">gateway</text>
    <path d="M216 120 H250 V56 H290 M250 120 H290 M250 120 V184 H290" fill="none" stroke={box} />
    <text x="254" y="112" fill={sub} fontSize="10">gRPC</text>
    {[38, 102, 166].map((y) => (
      <g key={y}>
        <rect x="290" y={y} width="96" height="36" rx="4" fill="none" stroke={box} />
        <text x="338" y={y + 22} fill={box} fontSize="12" textAnchor="middle">go svc</text>
      </g>
    ))}
    <path d="M386 56 H420 M386 120 H420 M386 184 H420" stroke={box} />
    <rect x="420" y="38" width="72" height="164" rx="4" fill="none" stroke={code} />
    <text x="456" y="116" fill={code} fontSize="12" textAnchor="middle">kafka</text>
    <text x="456" y="132" fill={sub} fontSize="10" textAnchor="middle">events</text>
  </svg>
);

export const FileApiDiagram = () => (
  <svg
    viewBox="0 0 520 240"
    className="block h-auto w-full max-w-[520px] font-mono"
    role="img"
    aria-label="Client calls the Node.js file API, which checks RBAC, writes to PostgreSQL and an audit log, and queues jobs on RabbitMQ for a worker"
  >
    <rect x="4" y="100" width="64" height="40" rx="4" fill="none" stroke={box} />
    <text x="36" y="124" fill={box} fontSize="12" textAnchor="middle">client</text>
    <line x1="68" y1="120" x2="116" y2="120" stroke={box} />
    <text x="92" y="112" fill={sub} fontSize="10" textAnchor="middle">REST</text>
    <rect x="116" y="88" width="112" height="64" rx="4" fill={hot} />
    <text x="172" y="116" fill="#15171C" fontSize="12" textAnchor="middle">file api</text>
    <text x="172" y="132" fill="#15171C" fontSize="11" textAnchor="middle">node.js</text>
    <rect x="136" y="20" width="72" height="32" rx="4" fill="none" stroke={code} />
    <text x="172" y="40" fill={code} fontSize="12" textAnchor="middle">rbac</text>
    <line x1="172" y1="52" x2="172" y2="88" stroke={code} strokeDasharray="3 3" />
    <path d="M228 104 H290 V56 H320 M228 120 H320 M228 136 H290 V184 H320" fill="none" stroke={box} />
    {[
      [38, "postgresql"],
      [102, "audit log"],
      [166, "rabbitmq"],
    ].map(([y, label]) => (
      <g key={label}>
        <rect x="320" y={y} width="112" height="36" rx="4" fill="none" stroke={box} />
        <text x="376" y={(y as number) + 22} fill={box} fontSize="12" textAnchor="middle">{label}</text>
      </g>
    ))}
    <line x1="432" y1="184" x2="460" y2="184" stroke={box} />
    <rect x="460" y="166" width="56" height="36" rx="4" fill="none" stroke={sub} strokeDasharray="4 3" />
    <text x="488" y="188" fill={sub} fontSize="11" textAnchor="middle">worker</text>
  </svg>
);
