import { motion } from 'framer-motion';

const metrics = [
    { value: '12+', label: 'Communities Served' },
    { value: '500+', label: 'Students Impacted' },
    { value: '99.9%', label: 'System Uptime' },
    { value: '$2M+', label: 'Grants Managed' },
];

export default function MetricsStrip() {
    return (
        <section className="py-20 border-y border-[var(--aegis-border)] bg-[var(--aegis-engine)]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="stat-value gradient-text-blue">{metric.value}</div>
                            <div className="stat-label">{metric.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
