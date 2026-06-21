export default function SectionTitle({eyebrow,title,desc}:{eyebrow?:string;title:string;desc?:string}){
 return <div className="flex items-end justify-between gap-4 mb-7">
  <div>{eyebrow && <span className="badge bg-mint text-forest">{eyebrow}</span>}<h2 className="text-3xl md:text-4xl font-black mt-3">{title}</h2>{desc && <p className="text-slate-500 mt-3 leading-8">{desc}</p>}</div>
 </div>
}
