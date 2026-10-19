import { ArrowUpRight, ChartNoAxesCombined } from 'lucide-react';
import { profile, verifiedMetricValue } from '@/data/profile';

export default function CommercialIndicators() {
  return <div className="metric-grid">{profile.indicators.map(item => {
    const value = verifiedMetricValue(item);
    return <article className="metric-card" key={item.label}>
      <div className="metric-heading"><ChartNoAxesCombined size={20} /><span>{value === null ? 'INDICADOR DE ACOMPANHAMENTO' : 'DADO DOCUMENTADO'}</span></div>
      <h3>{item.label}</h3>
      {value !== null ? <><strong className="metric-value">{value}</strong><p className="metric-context">{item.period}<br />Fonte: {item.source}</p></> : <p>{item.description}</p>}
      <span className="metric-foot">{value === null ? 'Valor aguardando dados validados' : 'Resultado restrito ao contexto informado'}<ArrowUpRight size={15} /></span>
    </article>;
  })}</div>;
}
