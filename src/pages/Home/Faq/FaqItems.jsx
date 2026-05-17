const FaqItem = ({ question, answer, defaultOpen = false }) => {
  return (
    <div
      className={`collapse collapse-arrow bg-white rounded-xl mb-4 border transition-all ${defaultOpen ? "border-[#003d3d] ring-1 ring-[#003d3d]" : "border-gray-200"}`}
    >
      <input type="radio" name="my-accordion-2" defaultChecked={defaultOpen} />

      <div className="collapse-title text-[17px] font-bold text-[#003d3d] py-5">
        {question}
      </div>

      <div className="collapse-content text-gray-500 text-[15px] leading-relaxed">
        <div className="pt-2 border-t border-gray-100">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
