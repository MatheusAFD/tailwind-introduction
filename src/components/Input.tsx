interface Input {
  inputName: String;
  inputType: String;
}

export function Input(props: Input) {
  return (
    <>
      <div className="w-1/1 relative mt-5   ">
        <label
          htmlFor="user__login"
          className="block before:content-[''] before:max-w-[75px] before:w-[100%] before:h-1 before:bg-[#ffffff] before:absolute  before:top-0 before:left-0 mt-1 "
        >
          {props.inputName}
        </label>
        <input
          type={props.inputType}
          id="user__login"
          className="border-slate-700 border rounded bg-slate-700 mt-3 w-1/1 py-1 pl-1"
        />
      </div>
    </>
  );
}