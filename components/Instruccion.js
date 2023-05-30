
const Instruccion = ({ins}) => {
  return (
    <div className="bg-slate-50 px-28 py-2 text-center shadow-md shadow-slate-800 rounded-md mb-3">{ins.includes("Camina")? ins.replace("Camina","Transborda"): ins}</div>
  )
}

export default Instruccion