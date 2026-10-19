'use client';

import { useId, useState } from 'react';
import { ArrowUpRight, ChartNoAxesCombined } from 'lucide-react';
import { profile, verifiedMetricValue } from '@/data/profile';

export default function CommercialIndicators() {
  const [selected, setSelected] = useState(0);
  const chartId = useId();
  const series = profile.indicatorDemo.series[selected];
  const max = Math.ceil(Math.max(...series.values, 1) / 10) * 10;
  const points = series.values.map((value, index) => `${45 + index * (500 / Math.max(series.values.length - 1, 1))},${205 - value / max * 170}`).join(' ');

  return <div className="commercial-dashboard">
    <div className="demo-chart">
      <div className="demo-chart-heading"><div><span className="demo-chart-badge">DEMONSTRAÇÃO · DADOS FICTÍCIOS</span><h3>Uma leitura do movimento.</h3></div><label>Indicador ilustrativo<select value={selected} onChange={event => setSelected(Number(event.target.value))}>{profile.indicatorDemo.series.map((item, index) => <option key={item.label} value={index}>{item.label}</option>)}</select></label></div>
      <p className="demo-chart-note">{profile.indicatorDemo.note}</p>
      <svg className="indicator-chart" viewBox="0 0 580 250" role="img" aria-labelledby={`${chartId}-title ${chartId}-description`}>
        <title id={`${chartId}-title`}>{`${series.label}: gráfico de demonstração`}</title><desc id={`${chartId}-description`}>{`Valores fictícios em ${series.unit}, sem relação com os resultados de Marcus. Os mesmos dados estão disponíveis na tabela abaixo.`}</desc>
        <defs><linearGradient id={`${chartId}-fill`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f87938" stopOpacity=".3" /><stop offset="100%" stopColor="#f87938" stopOpacity="0" /></linearGradient></defs>
        {[0, 1, 2, 3, 4].map(index => <g key={index}><line x1="45" x2="545" y1={205 - index * 42.5} y2={205 - index * 42.5} stroke="#ffffff15" strokeDasharray="3 6" /><text x="32" y={209 - index * 42.5} textAnchor="end">{Math.round(max * index / 4)}</text></g>)}
        <polygon points={`45,205 ${points} 545,205`} fill={`url(#${chartId}-fill)`} /><polyline points={points} fill="none" stroke="#f87938" strokeWidth="2.5" strokeLinejoin="round" />
        {series.values.map((value, index) => <g key={index}><circle cx={45 + index * (500 / Math.max(series.values.length - 1, 1))} cy={205 - value / max * 170} r="4" fill="#ffb17b" /><text x={45 + index * (500 / Math.max(series.values.length - 1, 1))} y="235" textAnchor="middle">{profile.indicatorDemo.periods[index]}</text></g>)}
      </svg>
      <details className="chart-data"><summary>Ver dados de demonstração</summary><table><caption>{series.label} · dados fictícios ({series.unit})</caption><thead><tr><th scope="col">Ciclo ilustrativo</th><th scope="col">Valor fictício</th></tr></thead><tbody>{series.values.map((value, index) => <tr key={index}><th scope="row">{profile.indicatorDemo.periods[index]}</th><td>{value} {series.unit}</td></tr>)}</tbody></table></details>
    </div>
    <div className="metric-grid">{profile.indicators.map(item => {
      const value = verifiedMetricValue(item);
      return <article className="metric-card" key={item.label}>
        <div className="metric-heading"><ChartNoAxesCombined size={20} /><span>{value === null ? 'INDICADOR DE ACOMPANHAMENTO' : 'DADO INFORMADO COM FONTE'}</span></div><h3>{item.label}</h3>
        {value !== null ? <><strong className="metric-value">{value}</strong><p className="metric-context">{item.period}<br />Fonte: {item.source}</p></> : <p>{item.description}</p>}
        <span className="metric-foot">{value === null ? 'Valor aguardando dados validados' : 'Resultado restrito ao contexto informado'}<ArrowUpRight size={15} /></span>
      </article>;
    })}</div>
  </div>;
}
