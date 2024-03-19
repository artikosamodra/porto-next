import { CaretDoubleDown } from "@phosphor-icons/react/dist/ssr";

const BtnHide = ({ nameBtn, handle }) => {
  return (
    <button
      className="py-2 px-5 shadow-lg bg-stone-600 rounded-md text-white hover:bg-indigo-600 font-bold flex items-center gap-2"
      onClick={handle}
    >
      {nameBtn} <CaretDoubleDown size={14} />
    </button>
  );
};

export default BtnHide;
