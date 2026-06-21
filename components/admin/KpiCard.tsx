export default function KpiCard({title,value,sub,tone="forest"}:{title:string;value:string;sub?:string;tone?:string}){
 const cls = tone==="red"?"text-red":tone==="blue"?"text-blue":tone==="amber"?"text-amber":"text-forest";
 return <div className="admin-card p-5">
  <p className="text-slate-500 text-sm">{title}</p>
  <b className={`text-2xl md:text-3xl block mt-2 ${cls}`}>{value}</b>
  {sub&&<p className="text-xs text-slate-500 mt-2">{sub}</p>}
 </div>
}
