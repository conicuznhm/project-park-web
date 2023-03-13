export default function PageMainLayout(props) {
  const { children } = props;
  return (
    <>
      <div className="h-[852px] flex flex-col bg-[radial-gradient(at_center_top,_#184353,_#1B2838,_#1B2838)] border-0 rounded-b-2xl">
        {/* <div className="w-screen flex justify-between pb-10"> */}
        {/* <div className="overflow-y-auto scrollbar-hide flex justify-between pb-10"> */}
        <div className="overflow-y-auto scrollbar-hide pb-10 pt-5 mx-auto w-[90%] h-full">
          {/* <div className="flex-1">side left</div> */}
          {/* <div className="flex-[2_1_0%]">{children}</div> */}
          <div>{children}</div>
          {/* <div className="flex-1">side right</div> */}
        </div>
      </div>
    </>
  );
}
