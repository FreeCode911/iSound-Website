"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Circuit Breaker",
    description:
      "If a node disconnects 3 times within 2 minutes, it's automatically cooled down for 10 minutes.",
  },
  {
    title: "Instant Failover",
    description:
      "When a node goes down, your music seamlessly migrates to a healthy node within 200ms.",
  },
  {
    title: "Load Balancing",
    description:
      "New connections are routed to the node with the fewest active players.",
  },
  {
    title: "Node Health Monitoring",
    description:
      "Real-time status of all nodes displayed in the /about command.",
  },
];

function ArchitectureDiagram() {
  const nodes = [
    { cx: 480, cy: 60, label: "Node 1", healthy: true },
    { cx: 480, cy: 150, label: "Node 2", healthy: true },
    { cx: 480, cy: 240, label: "Node 3", healthy: false },
  ];

  return (
    <svg viewBox="0 0 560 300" className="w-full h-auto">
      {/* Bot node */}
      <g>
        <circle cx="80" cy="150" r="42" fill="#1A0D00" stroke="#F0B52A" strokeWidth="2" />
        <text
          x="80"
          y="145"
          textAnchor="middle"
          fill="#FFD966"
          fontSize="13"
          fontFamily="var(--font-heading), sans-serif"
        >
          iSound
        </text>
        <text x="80" y="162" textAnchor="middle" fill="#B89A4D" fontSize="10">
          Bot
        </text>
      </g>

      {nodes.map((n, i) => (
        <g key={n.label}>
          <motion.line
            x1="122"
            y1="150"
            x2={n.cx - 40}
            y2={n.cy}
            stroke={n.healthy ? "#F0B52A" : "#ED4245"}
            strokeWidth="2"
            strokeDasharray={n.healthy ? "0" : "6 4"}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
          />
          <circle
            cx={n.cx}
            cy={n.cy}
            r="36"
            fill="#110800"
            stroke={n.healthy ? "#57F287" : "#ED4245"}
            strokeWidth="2"
          />
          <text
            x={n.cx}
            y={n.cy - 2}
            textAnchor="middle"
            fill="#FFD966"
            fontSize="12"
          >
            {n.label}
          </text>
          <text
            x={n.cx}
            y={n.cy + 14}
            textAnchor="middle"
            fill={n.healthy ? "#57F287" : "#ED4245"}
            fontSize="9"
            fontFamily="var(--font-mono), monospace"
          >
            {n.healthy ? "healthy" : "cooling down"}
          </text>
        </g>
      ))}

      {/* Failover arrow from node 3 to node 1 */}
      <motion.path
        d="M 460 245 C 380 245, 380 90, 448 68"
        fill="none"
        stroke="#F0B52A"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        markerEnd="url(#arrow)"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.9 }}
      />
      <defs>
        <marker
          id="arrow"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill="#F0B52A" />
        </marker>
      </defs>
    </svg>
  );
}

export default function Architecture() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl text-text mb-4">
            Enterprise-Grade Reliability
          </h2>
          <p className="text-textMuted text-base sm:text-lg mb-8">
            iSound uses multiple Lavalink nodes with intelligent failover.
          </p>

          <div className="flex flex-col gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="flex gap-4"
              >
                <div className="w-1.5 rounded-full bg-accent/50 shrink-0" />
                <div>
                  <h3 className="text-text font-semibold text-sm mb-1">
                    {f.title}
                  </h3>
                  <p className="text-textMuted text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-surfaceElevated border border-mid rounded-lg p-6"
        >
          <ArchitectureDiagram />
        </motion.div>
      </div>
    </section>
  );
}
