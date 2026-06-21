export default function StatusBadge({status}:{status:string}){
 const map:any={
  paid:["پرداخت شده","bg-mint text-forest"], sent:["ارسال شده","bg-blue/10 text-blue"], pending:["در انتظار","bg-amber/10 text-amber"], cancelled:["لغو شده","bg-red/10 text-red"],
  unpaid:["پرداخت نشده","bg-amber/10 text-amber"], overdue:["سررسید گذشته","bg-red/10 text-red"],
  in:["ورود","bg-mint text-forest"], out:["خروج","bg-red/10 text-red"], adjust:["اصلاح","bg-blue/10 text-blue"]
 };
 const [label,cls]=map[status]||[status,"bg-slate-100 text-slate-600"];
 return <span className={`badge ${cls}`}>{label}</span>
}
